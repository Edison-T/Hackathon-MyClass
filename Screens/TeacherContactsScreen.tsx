import React, {useLayoutEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, Text, Platform, KeyboardAvoidingView, TextInput, Alert, ActivityIndicator, Image, Pressable } from 'react-native';
import { Avatar, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import ContactListItem from '../components/ContactListItem'; // A.K.A 'index.tsx'
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { createChatRoom, createChatRoomUser } from '../src/graphql/mutations';

import { useEffect } from 'react';
import { API, graphqlOperation, Auth, Storage } from 'aws-amplify';
import { listUsers } from '../src/graphql/queries';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/core';
import uuid from 'react-native-uuid';



const TeacherContactsScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("https://img.icons8.com/cotton/2x/plus--v3.png");
    const [chatroomName, setchatroomName] = useState(null);

    useLayoutEffect (() => {
        navigation.setOptions({
              headerLeft: () => (
                <View>
                  <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Chats Screen')}>
                  <Ionicons
                        name="chevron-back-outline" 
                        size={35}
                        color = 'white'
                    />
                </TouchableOpacity>
                </View>
              )
    }), [navigation]});

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };

    


    const create = async () => {
        if(!chatroomName) {
            Alert.alert('Please enter a class name.')
            return;
        }
        setLoading(true)
        try {
            function makeid() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
              
                for (var i = 0; i < 6; i++)
                  text += possible.charAt(Math.floor(Math.random() * possible.length));
              
                return text;
              }
            
            //*** BUG: Teacher has to click 'Create!' twice to create a class
            //Maybe it's because the id hasn't been generated into the mutation yet
            //Try putting generatedNumber function outside of function create.
            //Fix too many renders error

            if(!image) {
                return;
            }
            const blob = await getBlob(image);
            const {key} = await Storage.put(`${uuid.v4()}.png`, blob);

            const newChatRoomData = await API.graphql(
                graphqlOperation(
                    createChatRoom, {
                        input: {
                            id: makeid(), // else delete this
                            name: chatroomName,
                            imageUri: key,
                            lastMessageID: "zz7050e7-b24d-4ce1-a048-e57da56ff3e7",
                        }
                    }
                )
            ) 

            if (!newChatRoomData) {
                console.log("Failed to create a chat room :( ")
                return;
            }

            const newChatRoom = newChatRoomData.data.createChatRoom;

            const userInfo = await Auth.currentAuthenticatedUser();
            await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                        input: {
                        userID: userInfo.attributes.sub,
                        chatRoomID: newChatRoom.id,
                        allowAllNotifications: true,
                        allowSelectedNotifications: false,
                        allowAllConversationNotifications: true,
                        allowSelectedConversationNotifications: true,
                        }
                    }
                )
            )
            setLoading(false)

            navigation.navigate('Chats Screen', {
                // id: newChatRoom.id,
                // name: newChatRoom.name,
                // paramKey: newChatRoom.id
            })

        } catch (e) {
            console.log(e)
            Alert.alert('Oops! A classroom could not be created', 'Please try again')
            setLoading(false)
            return;
        }
    }
   
    const getBlob = async (uri: string) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        return blob;
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={[styles.container, {width: "100%"}]}
        keyboardVerticalOffset={200}>
            <StatusBar style="light"/>
            <View>
                <Text style={styles.bigText}>
                    Let's Create a Class!
                </Text>
                <Text style={styles.smallText}>
                    Set a name and image for your class!
                </Text>
            </View>
            <Pressable onPress={pickImage}>
                <Image
                    style={styles.avatar}
                    //source={{uri: 'https://img.icons8.com/cotton/2x/plus--v3.png'}}
                    source={ image ? {uri: image }: null }
                />
            </Pressable>
            <View style={{ height: 40 }}/>
            <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Enter a Class Name" 
                value={chatroomName} 
                onChangeText={(text) => setchatroomName(text)}
                />
            </View>
            <TouchableOpacity
                onPress={create}
                activeOpacity={0.5}>
                <View style={styles.buttons}>
                    {loading ? 
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                    <ActivityIndicator size="large" color="#00BFFF" />
                 </View>
                    :
                    <Text style={[styles.text, {color: "#00BFFF", fontWeight: "600", fontSize: 25 }]}>
                        Create!
                    </Text>}
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    inputContainer: {
        width: 350,
    },
    textInput: {
        alignItems: 'center',
        textAlign: 'center',
        height: 70,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        fontSize: 25,
        fontFamily: 'Avenir Next',
        marginBottom: 40
    },
    avatar: {
        shadowColor: "rgba(20, 40, 100, 0.20)",
        shadowOffset: {width:0, height:9},
        shadowOpacity: 1,
        shadowRadius: 20,
        width: 175,
        height: 175, 
        borderRadius: 100
    },
    buttons: {
        backgroundColor: "#fff",
        fontSize: 16,
        borderRadius: 20,
        paddingVertical: 13,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        shadowColor: "rgba(20, 40, 100, 0.20)",
        shadowOffset: {width:1, height:4},
        shadowOpacity: 1,
        shadowRadius: 10,
        width: 275,
        height: 70,
      },
    bigText: {
        fontFamily: "Avenir Next",
        color: "#1D2029",
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
      },
    smallText: {
        fontFamily: "Avenir Next",
        color: "#ABB4BD",
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40
    },
    text: {
        fontFamily: 'Avenir Next',
        color: '#1D2029',
    },
})

export default TeacherContactsScreen