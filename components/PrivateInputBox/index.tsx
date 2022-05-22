import React, { useState, FC } from "react";
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image, Pressable, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import ChatMessage from "../ChatMessage";

import {MaterialCommunityIcons, Feather, AntDesign} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import { Audio, AVPlaybackStatus } from "expo-av";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { MentionInput, MentionSuggestionsProps, Suggestion, Part, PartType, parseValue, isMentionPartType, replaceMentionValues} from 'react-native-controlled-mentions'
import {S3Image} from 'aws-amplify-react-native';


import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { getUser, getChatRoom } from "../../Screens/queries";
import { createMessage, createPrivateRoomMessage, updateChatRoom, updateChatRoomUser, updatePrivateRoom, updatePrivateRoomUser } from "../../src/graphql/mutations";
import { useEffect } from "react";
//import { Image } from "react-native-elements/dist/image/Image";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageReply from "../MessageReply";

const PrivateInputBox = (props) => {
    const [taggedPushTokens, setTaggedPushTokens] = useState([]);
    //const [image, setImage] = useState<string | null>(null);
    const [image, setImage] = useState([]);
    const [message, setMessage] = useState('');
    const [whoSentMessageName, setWhoSentMessageName] = useState('');
    const [progress, setProgress] = useState(0);
    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [soundURI, setSoundURI] = useState<string | null>(null);
    const [showListUsers, setShowListUsers] = useState(false);
    const [selectedListUser, setSelectedListUser] = useState([]);

    const {privateRoomID, messageReplyTo, removeMessageReplyTo, privateRoomName, chatRoomUserID, otherUserPushToken, myId } = props;

    const resetFields = () => {
        setMessage("");
        setImage([])
        setProgress(0);
        setSoundURI(null);
        removeMessageReplyTo();
    }

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
                setWhoSentMessageName(userData.data.getUser.name)
            } catch (e) {
                console.log(e);
            }
        } 
        fetchWhoSentMessageName();
    }, [])

    const updateChatRoomLastMessage = async (messageId: string) => {
        try {
            await API.graphql(
                graphqlOperation(
                    updatePrivateRoom, {
                        input: {
                            id: privateRoomID,
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
                    updatePrivateRoomUser, {
                        input: {
                            id: chatRoomUserID,
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
                  title: `${whoSentMessageName}`,
                  body: `Replied to you: "${message}"`
                })
          });

        //const allButReplyUser = (usersTokens.map((u) => u != messageReplyTo.user.expoPushToken))

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
                to: otherUserPushToken,
                sound: 'default',
                title: `${whoSentMessageName}`,
                body: `${message}`
            })
            });
        }
    }




    //send message
    const onSendPress = async () => {

        try {
            const newMessageData = await API.graphql(
                graphqlOperation(
                    createPrivateRoomMessage, {
                        input: {
                            content: message,
                            userID: myId,
                            privateRoomID,
                            replyToMessageID: messageReplyTo?.id
                        }
                    }
                )
            )
            await updateChatRoomLastMessage(newMessageData.data.createPrivateRoomMessage.id);
            await updateCRLastMessage(newMessageData.data.createPrivateRoomMessage.updatedAt);
        } catch (e) {
            console.log(e);
        }
        sendPushNotification();
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
//console.log(image.map(i => i.uri))
// {image.map((image, index) => {
//     console.log(image.uri)
// })}
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
                    createPrivateRoomMessage, {
                        input: {
                            content: message,
                            image: key,
                            imageWidth: item.width,
                            imageHeight: item.height,
                            userID: myId,
                            privateRoomID,
                            replyToMessageID: messageReplyTo?.id
                        }
                    }
                )
            )
            await updateChatRoomLastMessage(newMessageData.data.createPrivateRoomMessage.id)
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
                    createPrivateRoomMessage, {
                        input: {
                            content: message,
                            audio: key,
                            userID: myId,
                            privateRoomID,
                            replyToMessageID: messageReplyTo?.id
                        }
                    }
                )
            )
            await updateChatRoomLastMessage(newMessageData.data.createPrivateRoomMessage.id)
        } catch (e) {
            console.log(e);
        }
        resetFields();
    }

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
                        <MessageReply message={messageReplyTo}/>
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
                    <TextInput 
                        style={styles.testingMentionInput} 
                        placeholder='MyClass message'
                        multiline
                        value={message}
                        onChangeText={setMessage}
                    />
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

export default PrivateInputBox