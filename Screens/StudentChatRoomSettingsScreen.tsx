import React, {useLayoutEffect} from "react";
import { CurrentRenderContext, useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Button, ScrollView, FlatList, Alert } from "react-native";
import {API, graphqlOperation, Auth, syncExpression } from "aws-amplify";
import { getChatRoom } from "./queries";
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "../src/graphql/queries";
import ChatRoomListUsers from "../components/ChatRoomListUsers";
import * as mutations from "../src/graphql/mutations";

import { Input } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { onUpdateChatRoom } from "../src/graphql/subscriptions";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { Ionicons } from '@expo/vector-icons';
import {S3Image} from 'aws-amplify-react-native';
import StudentChatRoomListUsers from "../components/StudentChatRoomListUsers";


const StudentChatRoomSettingsScreen = ({route}) => {
    // const [role, setRole] = useState(null);
    const [users, setUsers] = useState ([]);
    const [chatRoomUserID, setChatRoomUserID] = useState([]);
    const navigation = useNavigation();
    const {classID, className, classImage} = route.params;

    useLayoutEffect (() => {
        navigation.setOptions({
              headerLeft: () => (
                <View>
                  <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Chat Room')}>
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
        const fetchUsers = async () => {
            try {
            const me = await Auth.currentAuthenticatedUser();
            const myID = me.attributes.sub
            const userData = await API.graphql(
                graphqlOperation(
                    getChatRoom, {
                        id: classID,
                    }
                )
            )
            //setUsers(userData.data.getChatRoom.chatRoomUsers.items.map(cru => cru.user))
            const allUsers = (userData.data.getChatRoom.chatRoomUsers.items.map(cru => cru.user))
            setUsers(allUsers.filter(u => u.id !== myID))
            } catch (e) {
            Alert.alert('Oops! An error has occurred')
            console.log(e);
            return;
            }
        }
        fetchUsers();
    }, [])

    useEffect(() => {
        const fetchChatRoomUserID = async () => {
            try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const userData = await API.graphql(
                graphqlOperation(
                    getUser, {
                        id: userInfo.attributes.sub,
                    }
                )
            )
            setChatRoomUserID(userData.data.getUser.chatRoomUser.items.find((cru) => cru.chatRoomID === classID).id)
            //console.log(userData.data.getUser.chatRoomUser.items.find((cru) => cru.chatRoomID === classID).id) //ask discord
            } catch (e) {
            Alert.alert('Oops! An error has occurred')
            console.log(e);
            return;
            }
        }
        fetchChatRoomUserID();
    }, [])

    const deleteUser = async (user) => {
        try {
            const userID = {
                id: chatRoomUserID,
            };
              
            const userData = await API.graphql({ 
                query: mutations.deleteChatRoomUser, 
                variables: {input: userID}
            });

            console.log(userData.data.deleteChatRoomUser)
        } catch (e) {
            Alert.alert('Oops! An error has occurred')
            console.log(e);
            return;
        }
        setUsers(users.filter((u) => u.id !== user.id))
        navigation.navigate("Chats Screen")
        console.log('chatRoomUser was successfully deleted')
        //delete the chatRoomUser based on chatRoomUserID state of id
    }
    
    
    const renderSeparator = () => (
        <View
        style={{
            backgroundColor: 'grey',
            height: 0.5,
            marginRight: 10,
            marginLeft: 10,
        }}
        />
    );

    const confirmDelete = (user) => {
        Alert.alert(
            `Leave "${className}"?`,
            `Are you sure you want to leave? You can always join back!`,
            [
                {
                    text: "Leave",
                    onPress: () => deleteUser(user),
                    style: "destructive"
                },
                {
                    text: "Cancel"
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.classDetails}>
                    <S3Image 
                        imgKey={classImage} 
                        style={{ width: 75,  height: 75, aspectRatio: 1, borderRadius: 100}} 
                    />
                    <Text style={styles.text}>{className}</Text>
                </View>           

                <View>
                    
                <FlatList
                    style={{ width: '100%', marginBottom: 30, borderWidth: 0.5, borderRadius: 15}} //add height or just use scrollview?
                    ItemSeparatorComponent={renderSeparator}
                    data={users}
                    renderItem={({ item }) => <StudentChatRoomListUsers user={item} />}
                    keyExtractor={(item) => item.id}
                />
                </View>

                <TouchableOpacity
                    onPress={confirmDelete}
                    activeOpacity={0.5}
                    style={styles.codeDescriptionContainer}>
                    <View style={styles.buttons}>
                        <Text style={[styles.text, {color: "white", fontWeight: "600", fontSize: 18, marginLeft: 0 }]}>
                            Leave Classroom
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    codeDescriptionContainer: {
        alignItems: "center",
        marginBottom: 30
    },
    text: {
        fontFamily: "Avenir Next",
        color: "#1D2029",
        fontSize: 30,
        marginLeft: 20,
        flexWrap: 'wrap',
        flex: 1,
    },
    buttons: {
        backgroundColor: "red",
        fontSize: 16,
        borderRadius: 8,
        paddingVertical: 13,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        shadowColor: "rgba(20, 40, 100, 0.20)",
        shadowOffset: {width:0, height:9},
        shadowOpacity: 1,
        shadowRadius: 20,
        width: 275,
      },
    classDetails: {
        borderRadius: 17,
        width: '100%',
        borderWidth: 3,
        borderColor: 'black',
        backgroundColor : "transparent",
        padding : 12,
        margin: 10,
        fontFamily: "Avenir Next",
        color: "#1D2029",
        fontSize: 40,
        fontWeight: '700',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 30
    }
      
})

export default StudentChatRoomSettingsScreen;