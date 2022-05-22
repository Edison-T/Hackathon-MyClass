import React, {useLayoutEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, ActivityIndicator, Text, Platform, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { Avatar, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import ContactListItem from '../components/ContactListItem'; // A.K.A 'index.tsx'
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { createChatRoom, createChatRoomUser } from '../src/graphql/mutations';

import { useEffect } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { getChatRoom } from '../src/graphql/queries';


const StudentContactsScreen = () => {
    const [loading, setLoading] = useState(false)
    const [chatroomID, setChatRoomID] = useState('')

    const navigation = useNavigation();

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

    const join = async () => {
        if(!chatroomID) {
            Alert.alert("Please enter a class code")
            return;
        }
        setLoading(true)
        try {
            const chatRoomData = await API.graphql(
                graphqlOperation(
                    getChatRoom, {
                            id: chatroomID
                    }
                )
            ) 

            if (!chatRoomData) {
                console.log("Failed to join :( ")
                return;
            }

            const chatRoom = chatRoomData.data.getChatRoom;

            const userInfo = await Auth.currentAuthenticatedUser();
            await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                        input: {
                        userID: userInfo.attributes.sub,
                        chatRoomID: chatRoom.id,
                        allowAllNotifications: true,
                        allowSelectedNotifications: false,
                        allowAllConversationNotifications: true,
                        allowSelectedConversationNotifications: true,
                        }
                    }
                )
            )
            setLoading(false);

            navigation.navigate('Chats Screen', {
                // id: chatRoom.id,
                // name: chatRoom.name, =>> navigates to chat room based on name/id
            })

        } catch (e) {
            Alert.alert('This class does not exist', 'Check for typos and try again.')
            setLoading(false)
            console.log(e)
            return;
        }
    }
   

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={[styles.container, {width: "100%"}]}
        keyboardVerticalOffset={60}>
            <StatusBar style="light"/>
            <View>
                <Text style={styles.bigText}>
                    Let's Join a Class!
                </Text>
                <Text style={styles.smallText}>
                    Enter your six-digit class code!
                </Text>
            </View>
            <View style={{ height: 50 }}/>
            <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Enter Code" 
                maxLength={6}
                autoCapitalize='none'
                value={chatroomID} 
                autoFocus
                onChangeText={(text) => setChatRoomID(text)}
                />
            </View>
            <TouchableOpacity
                onPress={join}
                activeOpacity={0.5}>
                <View style={styles.buttons}>
                    {loading ? 
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <ActivityIndicator size="large" color="#00BFFF" />
                    </View>
                    :
                    <Text style={[styles.text, {color: "#00BFFF", fontWeight: "600", fontSize: 25 }]}>
                        Join!
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
        marginBottom: 70,
        marginTop: 20,
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
    },
    buttons: {
        backgroundColor: "#fff",
        fontSize: 16,
        borderRadius: 20,
        paddingVertical: 13,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "rgba(20, 40, 100, 0.20)",
        shadowOffset: {width:1, height:4},
        shadowOpacity: 1,
        shadowRadius: 10,
        width: 275,
        height: 70,
        marginBottom: 20
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
        marginTop: 10
    },
    text: {
        fontFamily: 'Avenir Next',
        color: '#1D2029',
    },
})

export default StudentContactsScreen