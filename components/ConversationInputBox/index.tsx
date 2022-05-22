import React, { useState, FC } from "react";
import { Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import ChatMessage from "../ChatMessage";

import {MaterialCommunityIcons, Feather, AntDesign} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import { Audio, AVPlaybackStatus } from "expo-av";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import {S3Image} from 'aws-amplify-react-native';

import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { getUser, getChatRoom } from "../../Screens/queries";
import { createConversationMessage, createMessage, updateChatRoom, updateChatRoomUser, updateConversation, updateConversationUser } from "../../src/graphql/mutations";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MentionInput, MentionSuggestionsProps, Suggestion, Part, PartType, parseValue, isMentionPartType, replaceMentionValues} from 'react-native-controlled-mentions';
import MessageReply from "../MessageReply";

const renderSuggestions: (suggestions: Suggestion[]) => FC<MentionSuggestionsProps> = (suggestions) => (
    {keyword, onSuggestionPress},
  ) => {
    if (keyword == null) {
      return null;
    }

return (
    <View style={{ height:"auto", maxHeight: 195, }}>
    <ScrollView keyboardShouldPersistTaps="always" >
      {suggestions
        .filter(user => user.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
        .map(user => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={user.userID}
            onPress={() => { onSuggestionPress(user); }} //setTaggedPushTokens(taggedPushTokens => [user.expoPushToken, ...taggedPushTokens])
            style={styles.listUsersBox}
          >
            <S3Image 
                imgKey={user.imageUri} 
                style={{ width: 35,  height: 35, aspectRatio: 1, borderRadius: 50,}}
            />
            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: "bold", }}>{user.name}</Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
    </View>
  );
};

const ConversationInputBox = (props) => {
    const [image, setImage] = useState([]);
    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);
    const [whoSentMessageName, setWhoSentMessageName] = useState('');
    const [progress, setProgress] = useState(0);
    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [soundURI, setSoundURI] = useState<string | null>(null);

    const {conversationID, messageReplyTo, removeMessageReplyTo, CRUID, usersTokens, conversationName, myId, myName, inputBoxListUsers } = props;

    const newObjects = inputBoxListUsers.map(obj => {
        return {
            id: obj.expoPushToken,
            userID: obj.id,
            imageUri: obj.imageUri,
            name: obj.name,
            role: obj.role,
        }
    }) //switches the object key names to help bring up pushTokens to show in the tagging feature.
    //console.log(newObjects)

    const renderMentionSuggestions = renderSuggestions(newObjects);

    const resetFields = () => {
        setMessage("");
        setImage([])
        setProgress(0);
        setSoundURI(null);
        removeMessageReplyTo();
    }

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyUserId(userInfo.attributes.sub);
        } 
        fetchUser();
    }, [])

    useEffect(() => {
        const fetchWhoSentMessageName = async () => {
            try {
                const userInfo = await Auth.currentAuthenticatedUser();
                const userData = await API.graphql(
                    graphqlOperation(
                        getUser, {
                            id: userInfo.attributes.sub,
                        }
                    )
                )
                //setCurrentUserID(userData.data.getUser.chatRoomUser.items.map(cru=>cru.userID))
                        //this is giving wrong userIDs
                setWhoSentMessageName(userData.data.getUser.name)
                //console.log(userData.data.getUser.id)
            } catch (e) {
                console.log(e);
            }
        } 
        fetchWhoSentMessageName();
    }, [])


    const updateConversationLastMessage = async (messageId: string) => {
        try {
            await API.graphql(
                graphqlOperation(
                    updateConversation, {
                        input: {
                            id: conversationID,
                            lastMessageID: messageId,
                        }
                    }
                )
            );
        } catch(e) {
            console.log(e);
        }
    }
    //++++
    const updateCRLastMessage = async (timeStamp: String) => {
        try {
            await API.graphql(
                graphqlOperation(
                    updateConversationUser, {
                        input: {
                            id: CRUID,
                            lastMessageReadTimeStamp: timeStamp,
                        }
                    }
                )
            );
        } catch(e) {
            console.log(e);
        }
    }
    
    const sendPushNotification = () => {
        if (messageReplyTo) {
            let response = fetch('https://exp.host/--/api/v2/push/send', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  to: messageReplyTo.user.expoPushToken,
                  sound: 'default',
                  title: `${conversationName}`,
                  body: `${whoSentMessageName} replied to you: "${message}"`
                })
          });

        const allButReplyUser = (usersTokens.map((u) => u != messageReplyTo.user.expoPushToken))

        //   let nextResponse = fetch('https://exp.host/--/api/v2/push/send', {
        //         method: 'POST',
        //         headers: {
        //           Accept: 'application/json',
        //           'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //           to: allButReplyUser,
        //           sound: 'default',
        //           title: `${chatRoomName}`,
        //           body: `${whoSentMessageName}: "${message}"`
        //         })
        //   });

        } else {
            let response = fetch('https://exp.host/--/api/v2/push/send', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: usersTokens,
                sound: 'default',
                title: `${conversationName}`,
                body: `${whoSentMessageName}: "${message}"`
            })
            });
        }
    }

    const sendTaggedNotifications = (arrayOfPushTokens, stringWithoutMentionData) => {
        if (arrayOfPushTokens) {
            let response = fetch('https://exp.host/--/api/v2/push/send', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: arrayOfPushTokens,
                sound: 'default',
                title: `${conversationName}`,
                body: `${whoSentMessageName} tagged you: "${stringWithoutMentionData}"`
            })
            });
        } else {
            console.log('no one is tagged');
            return;
        }
    }

    //send message
    const onSendPress = async () => {
        const stringWithoutMentionData = replaceMentionValues(message, ({name}) => `@${name}`)

        // let yourValue = messageStringIncludingPushTokens
        // let correctArray = []
        // let array = yourValue.split(' ')
        // array.filter((a) => { a.startsWith('ExponentPushToken') ? correctArray.push(a) : null; })
        //console.log(correctArray) another way of extracting only the pushTokens.
        
        const messageStringIncludingPushTokens = replaceMentionValues(message, ({id}) => `${id}`)
        const arrayOfPushTokens = messageStringIncludingPushTokens.match(/ExponentPushToken\[[a-zA-Z0-9]+\]/g)
        //console.log(arrayOfPushTokens)

        try {
            const newMessageData = await API.graphql(
                graphqlOperation(
                    createConversationMessage, {
                        input: {
                            content: stringWithoutMentionData,
                            userID: myId,
                            conversationID,
                            replyToMessageID: messageReplyTo?.id
                        }
                    }
                )
            )
            await updateConversationLastMessage(newMessageData.data.createConversationMessage.id);
            await updateCRLastMessage(newMessageData.data.createConversationMessage.updatedAt);
            if (arrayOfPushTokens) {
                sendTaggedNotifications(arrayOfPushTokens, stringWithoutMentionData);
            } else {
                sendPushNotification();
            }
        } catch (e) {
            console.log(e);
        }

        resetFields();
    }

    //image picker
    useEffect(() => {
        (async () => {
          if (Platform.OS !== "web") {
            const libraryResponse =
              await ImagePicker.requestMediaLibraryPermissionsAsync();
            const photoResponse = 
              await ImagePicker.requestCameraPermissionsAsync();
            await Audio.requestPermissionsAsync();
            if (
              libraryResponse.status !== "granted" || 
              photoResponse.status !== "granted"
            ) {
              alert("Sorry, we need camera roll permissions to make this work!");
            }
          }
        })();
    }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
        //console.log(result);

        if (!result.cancelled) {
          //setImage(result.uri);
          setImage(image => [result, ...image]);

          //images.concat(`"${result.uri}"`)
        
        }
    };
    const takePhoto = async () => {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          aspect: [4, 3],
        });
    
        if (!result.cancelled) {
            setImage(image => [result, ...image]);
          //setImage(result.uri);
        }
      };
      const sendImage = async (item) => {
        if(!item) {
            return;
        }
        const blob = await getBlob(item.uri);
        const {key} = await Storage.put(`${uuid.v4()}.png`, blob, { 
            progressCallback(progress) {
                setProgress(progress.loaded/progress.total); 
        }});

        try {
            const newMessageData = await API.graphql(
                graphqlOperation(
                    createConversationMessage, {
                        input: {
                            content: message,
                            image: key,
                            imageWidth: item.width,
                            imageHeight: item.height,
                            userID: myId,
                            conversationID,
                            replyToMessageID: messageReplyTo?.id
                        }
                    }
                )
            )
            await updateConversationLastMessage(newMessageData.data.createConversationMessage.id)
        } catch (e) {
            console.log(e);
        }
        resetFields();
    } // MediaConvert @ vadim signal clone 1:33
      // to lower quality of sent image
      const promiseAll = async (image) => {
        await Promise.all(
            image.map((item) => sendImage(item))
        );
    }
    const getBlob = async (uri: string) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        return blob;
    }

    //Audio
    async function startRecording() {
        try {
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
          }); 

          console.log('Starting recording..');
          const { recording } = await Audio.Recording.createAsync(
             Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
          );
          setRecording(recording);
          console.log('Recording started');
        } catch (err) {
          console.error('Failed to start recording', err);
        }
    }
    async function stopRecording() {
        console.log('Stopping recording..');
        if(!recording) {
            return;
        }

        setRecording(null);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
          }); 

        const uri = recording.getURI(); 
        console.log('Recording stopped and stored at', uri);
        if (!uri) {
            return;
        }
        setSoundURI(uri);
    }
    //send audio
    const sendAudio = async () => {
        if(!soundURI) {
            return;
        }
        const uriParts = soundURI.split(".");
        const extension = uriParts[uriParts.length - 1]
        const blob = await getBlob(soundURI);
        const {key} = await Storage.put(`${uuid.v4()}.${extension}`, blob, { 
            progressCallback(progress) {
                setProgress(progress.loaded/progress.total); 
        }});

        try {
            const newMessageData = await API.graphql(
                graphqlOperation(
                    createConversationMessage, {
                        input: {
                            content: message,
                            audio: key,
                            userID: myUserId,
                            conversationID,
                            replyToMessageID: messageReplyTo?.id
                        }
                    }
                )
            )
            await updateConversationLastMessage(newMessageData.data.createConversationMessage.id)
        } catch (e) {
            console.log(e);
        }
        resetFields();
    }

    //send button function
    const onPress = async () => {
        if (image.length > 0) {
          await promiseAll(image);
          //sendPushNotification();
        } else if (soundURI) {
          sendAudio();
        } else if (message) {
          onSendPress();
          //sendPushNotification();
        } else {
          return null;;
        }
      };


      return (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{width: "100%"}}
        keyboardVerticalOffset={77}
        >

            {messageReplyTo && (
                <ScrollView contentContainerStyle={{ backgroundColor: '#e3e3e3', padding: 5, borderRadius: 15, flexDirection: "row", alignSelf: 'stretch', justifyContent: 'space-between', }} style={{ height:'30%', borderRadius: 15 }} showsVerticalScrollIndicator={false} >
                    <View style={{ flex: 1, alignItems: "flex-start", marginBottom: 10, }}>
                        <Text style={{fontSize: 15, marginTop: 5, marginLeft: 5}}>Reply to:</Text>
                        <MessageReply message={messageReplyTo} myName={myName} />
                    </View>
                    <Pressable onPress={() => removeMessageReplyTo()}>
                        <AntDesign
                            name="close"
                            size={24}
                            color="black"
                        />
                    </Pressable>
                </ScrollView>
            )}
            {image.length > 0 ? 
                    <View style={styles.sendImageContainer}>
                    <ScrollView horizontal={true} >
                        {image.map((images, index) => {
                            return <View key={images.uri} >
                                        <Image source={{ uri: images.uri }} style={{ aspectRatio: images.width / images.height, borderRadius: 10, margin: 5, resizeMode: "stretch", flex: 1 }} />
                                        <Pressable style={{ position: "absolute", alignSelf: "flex-end" }} onPress={() => setImage(image.filter((i) => i.uri !== images.uri))} >
                                            <AntDesign
                                                name="closecircle"
                                                size={19}
                                                color="grey"
                                                style={{ margin: 8 }}
                                            />
                                        </Pressable>
                                </View> ;
                        })}
                    </ScrollView>

                    <View
                        style={{
                        flex: 1,
                        justifyContent: "flex-start",
                        alignSelf: "flex-end",
                        }}
                    >
                    <View
                        style={{
                            height: 5,
                            borderRadius: 5,
                            backgroundColor: "#00BFFF",
                            width: `${progress * 100}%`,
                        }}
                        />
                    </View>
                    </View>
            :
                null
            }

            {soundURI && <AudioPlayer soundURI ={soundURI}/>}

            {/* {showListUsers ?
                <View style={styles.listUsersBox}>
                    <FlatList 
                        ItemSeparatorComponent={renderSeparator}
                        data={inputBoxListUsers}
                        renderItem={({ item }) => <InputBoxListUsers user={item} setSelectedListUser={() => { onPressListUser(item) }} /> } 
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            : null
            } */}

            

            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    {/* <TextInput 
                        style={styles.textInput} 
                        placeholder='Enter your message'
                        multiline
                        value={message}
                        onChangeText={setMessage}
                    /> */}

                    <MentionInput
                        value={message}
                        onChange={setMessage}
                        partTypes={[
                        {
                            trigger: '@',
                            renderSuggestions: renderMentionSuggestions,
                            textStyle: { color: '#FF3131', fontWeight: "700", },

                        },
                        {
                            pattern: /(https?:\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.(xn--)?[a-z0-9-]{2,20}\b([-a-zA-Z0-9@:%_\+\[\],.~#?&\/=]*[-a-zA-Z0-9@:%_\+\]~#?&\/=])*/gi,
                            textStyle: {color: '#00BFFF', textDecorationLine: "underline"},
                        },
                        ]}

                        placeholder= "MyClass message"
                        style={styles.testingMentionInput}
                    />

                    {/* <View style={{ position:"absolute", left: 235, flexDirection: "row", }}> */}
                         
                    
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Pressable onPress={pickImage}>
                        <Feather
                            name="image"
                            size={24}
                            color="#595959"
                            style={styles.icon}
                        />
                    </Pressable>

                    <Pressable onPress={takePhoto}>
                        <Feather
                            name="camera"
                            size={24}
                            color="#595959"
                            style={styles.icon}
                        />
                    </Pressable>

                    <Pressable onPressIn={startRecording} onPressOut={stopRecording}>
                        <MaterialCommunityIcons
                            name={recording ? "microphone" : "microphone-outline"}
                            size={24}
                            color={recording ? "#00BFFF" : '#595959'}
                            style={styles.icon}
                        />
                    </Pressable>
                </View>   
                <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
                    <View style={styles.buttonContainer}>
                        <MaterialCommunityIcons name='arrow-up' size={28} color="white"/>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ConversationInputBox