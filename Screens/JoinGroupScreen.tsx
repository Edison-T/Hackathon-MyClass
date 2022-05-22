import React, {useLayoutEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, ActivityIndicator, Text, Platform, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { Avatar, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import ContactListItem from '../components/ContactListItem'; // A.K.A 'index.tsx'
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { createChatRoom, createChatRoomUser, createGroupRoomUser } from '../src/graphql/mutations';

import { useEffect } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { getChatRoom, getGroupRoom } from '../src/graphql/queries';


const JoinGroupScreen = () => {
    const [loading, setLoading] = useState(false)
    const [groupRoomID, setGroupRoomID] = useState('')

    const navigation = useNavigation();

    useLayoutEffect (() => {
        navigation.setOptions({
              headerLeft: () => (
                <View>
                  <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Create or Join Groups')}>
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
        if(!groupRoomID) {
            Alert.alert("Please enter a class code")
            return;
        }
        setLoading(true)
        try {
            const groupRoomData = await API.graphql(
                graphqlOperation(
                    getGroupRoom, {
                            id: groupRoomID
                    }
                )
            ) 

            if (!groupRoomData) {
                console.log("Failed to join :( ")
                return;
            }

            const groupRoom = groupRoomData.data.getGroupRoom;

            const userInfo = await Auth.currentAuthenticatedUser();
            await API.graphql(
                graphqlOperation(
                    createGroupRoomUser, {
                        input: {
                        userID: userInfo.attributes.sub,
                        groupRoomID: groupRoom.id,
                        allowAllNotifications: true,
                        allowSelectedNotifications: false,
                        allowAllConversationNotifications: true,
                        allowSelectedConversationNotifications: true,
                        }
                    }
                )
            )
            setLoading(false);

            navigation.navigate('Groups Home Screen', {
                // id: chatRoom.id,
                // name: chatRoom.name, =>> navigates to chat room based on name/id
            })

        } catch (e) {
            Alert.alert('This group does not exist', 'Check for typos and please try again.')
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
                    Let's Join a Group!
                </Text>
                {/* add groupPng here to fill in space? */}
                <Text style={styles.smallText}>
                    Enter your six-digit group code!
                </Text>
            </View>
            <View style={{ height: 50 }}/>
            <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Enter Code" 
                maxLength={6}
                autoCapitalize='none'
                value={groupRoomID} 
                autoFocus
                onChangeText={(text) => setGroupRoomID(text)}
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

export default JoinGroupScreen