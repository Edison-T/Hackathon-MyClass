import React from 'react';
import { FlatList, Text, View, KeyboardAvoidingView, Alert, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ChatMessage from '../components/ChatMessage';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as mutations from "../src/graphql/mutations";


import {API, graphqlOperation, Auth } from "aws-amplify";
import { getUser, messagesByGroupRoom, messagesByPrivateRoom } from '../src/graphql/queries';
import { messagesByChatRoom, listChatRoomUsers } from '../src/graphql/queries';
import { onCreateGroupRoomMessage, onCreateMessage, onCreatePrivateRoomMessage } from '../src/graphql/subscriptions';
import { useState } from 'react';
import styles from '../components/ChatListItem/style';
import { Message } from '../types';
import PrivateInputBox from '../components/PrivateInputBox';
import PrivateChatMessage from '../components/PrivateChatMessage';
import { getPrivateRoom } from './queries';

const PrivateRoomScreen = ({route}) => {
    const [messages, setMessages] = useState([]);
    const [myId, setMyId] = useState([null]);
    const [messageReplyTo, setMessageReplyTo] = useState(null);
    const [chatRoomUserID, setChatRoomUserID] = useState('');
    const [ otherUserPushToken, setOtherUserPushToken ] = useState('');
    const [ nextToken, setNextToken ] = useState('firstPage') //sets nextToken for the next page of messages

    const navigation = useNavigation();
    const {id, privateRoomName} = route.params;

    //onPress leave chat

    //send message whenever user leaves chat ("itsgood has left the chat")

    const updatePrivateRoomUserLastRead = async () => {
      const userID = await Auth.currentAuthenticatedUser();
      try {
          const userData = await API.graphql(
              graphqlOperation(
                  getPrivateRoom, {
                      id: id,
                  }
              )
          )
          const currentPrivateRoomUserID = (userData.data.getPrivateRoom.privateRoomUsers.items.find((cru) => cru.userID === userID.attributes.sub).id)
          if (userData.data.getPrivateRoom.lastMessage) {
            const timestamp = (userData.data.getPrivateRoom.lastMessage.updatedAt)
            await API.graphql(
                graphqlOperation(
                    mutations.updatePrivateRoomUser, {
                        input: {
                            id: currentPrivateRoomUserID,
                            lastMessageReadTimeStamp: timestamp
                        }
                    }
                )
            )
          } else {
            return;
          }
    } catch (e) {
          console.log(e);
          return;
      }
    }

    useLayoutEffect (() => {
      navigation.setOptions({
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={confirmDelete}>
                <Ionicons
                      name="exit-outline" 
                      size={30}
                      color = 'white'
                  />
              </TouchableOpacity>
            </View>),
            headerLeft: () => (
              <View>
                <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { updatePrivateRoomUserLastRead(); navigation.navigate('Private Chat Home Screen')}}>
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
      const gestureHandler = navigation.addListener('blur', updatePrivateRoomUserLastRead); //focus = does something when you first enter the screen; blur = does something when you exit the screen; state = does both
      //console.log('exited')
      return () => {
        gestureHandler;
      };
    }, [navigation]);//when exit screen, update the user last read!

    const fetchMessages = async () => {
      if (nextToken == "firstPage") {
        const messagesData = await API.graphql(
          graphqlOperation(
            messagesByPrivateRoom, {
              privateRoomID: route.params.id,
              sortDirection: "DESC",
              limit: 7,
            }
          )
        )
        setMessages(messagesData.data.messagesByPrivateRoom.items);
        setNextToken(messagesData.data.messagesByPrivateRoom.nextToken)
      }
      else {
        return;
      }
      //setLoadedMessages(messagesData.data.messagesByChatRoom.items.slice(0, 7))
      //gives me ALL of the messages that were sent in this chatRoom.
    }

    //delete below if not working
    const fetchMessagesPage = async () => {
      if (nextToken) {
        const messagesData = await API.graphql(
          graphqlOperation(
            messagesByPrivateRoom, {
              privateRoomID: route.params.id,
              sortDirection: "DESC",
              limit: 7,
              nextToken
            }
          )
        )
        setNextToken(messagesData.data.messagesByPrivateRoom.nextToken)
        const newMessages = messagesData.data.messagesByPrivateRoom.items

        const newArrayOfMessages = messages.concat(newMessages);
        setMessages(newArrayOfMessages)
      } else {
        //console.log('No more messages are left to fetch')
        return
      }
    }

    useEffect(() => {
      const getMyId = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        setMyId(userInfo.attributes.sub);
      }
      getMyId();
    }, [])
  
    useEffect(() => {
      fetchMessages();
    }, [])
  
    useEffect(() => {
      const getMyId = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        setMyId(userInfo.attributes.sub);
      }
      getMyId();
    }, [])
  
    useEffect(() => {
      const subscription = API.graphql(
        graphqlOperation(onCreatePrivateRoomMessage)
      ).subscribe({
        next: (data) => {
          const newMessage = data.value.data.onCreatePrivateRoomMessage;
  
          if (newMessage.privateRoomID !== route.params.id) {
            console.log("Message is in another room!")
            return;
          }
  
          fetchMessages();
          // setMessages([newMessage, ...messages]);
        }
      });
  
      return () => subscription.unsubscribe();
    }, []);

  //   useEffect(() => {
  //     const fetchChatRoomUserID = async () => {
  //         try {
  //         const userInfo = await Auth.currentAuthenticatedUser();
  //         const userData = await API.graphql(
  //             graphqlOperation(
  //                 getUser, {
  //                     id: userInfo.attributes.sub,
  //                 }
  //             )
  //         )
  //         setChatRoomUserID(userData.data.getUser.privateRoomUser.items.find((cru) => cru.privateRoomID === id).id)
  //         //console.log(userData.data.getUser.privateRoomUser.items.find((cru) => cru.privateRoomID === id).id) //ask discord
  //         } catch (e) {
  //         Alert.alert('Oops! An error has occurred')
  //         console.log(e);
  //         return;
  //         }
  //     }
  //     fetchChatRoomUserID();
  // }, []) //get privateRoomUserID to exit chat

  useEffect(() => {
    const fetchPrivateRoomInfo = async () => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser()
            const currentUserID = currentUser.attributes.sub
            const userData = await API.graphql(
                graphqlOperation(
                    getPrivateRoom, {
                        id: id,
                    }
                )
            )
            setOtherUserPushToken(userData.data.getPrivateRoom.privateRoomUsers.items.filter((i) => i.userID !== currentUserID).map(u => u.user.expoPushToken))
            setChatRoomUserID(userData.data.getPrivateRoom.privateRoomUsers.items.find((i) => i.userID === currentUserID).id)
            //setCRULastAnnouncementTimeRead(userData.data.getChatRoom.chatRoomUsers.items.find((i) => i.userID === currentUserID).lastAnnouncementReadTimeStamp)
            // if (userData.data.getChatRoom.lastAnnouncement) {
            //   setChatRoomLastAnnouncementTime(userData.data.getChatRoom.lastAnnouncement.updatedAt)
            // } else {
            //   return;
            // }
        } catch (e) {
            console.log(e);
        }
    } 
    fetchPrivateRoomInfo()
}, [])

  const deleteUser = async () => {
    try {
        const userID = {
            id: chatRoomUserID,
        };
          
        const userData = await API.graphql({ 
            query: mutations.deletePrivateRoomUser, 
            variables: {input: userID}
        });

        console.log(userData.data.deletePrivateRoomUser)
    } catch (e) {
        Alert.alert('Oops! An error has occurred')
        console.log(e);
        return;
    }
    navigation.navigate("Private Chat Home Screen")
    console.log('privateRoomUser was successfully deleted')
}

const confirmDelete = () => {
  Alert.alert(
      `Leave Private Chat?`,
      `Are you sure you want to leave?`,
      [
          {
              text: "Leave",
              onPress: () => deleteUser(),
              style: "destructive"
          },
          {
              text: "Cancel"
          }
      ]
  )
}

    
    return (
        <View style={{width: '100%', height: '100%', paddingHorizontal: 5}}>
            <FlatList
                onEndReachedThreshold={0}
                onEndReached={fetchMessagesPage}
                data={messages}
                renderItem={({ item }) => 
                  <PrivateChatMessage 
                    myId={myId} 
                    message={item} 
                    setAsMessageReply={() => setMessageReplyTo(item)}
                  />
                }
                inverted
                showsVerticalScrollIndicator={false}
            />
            <PrivateInputBox 
              myId={myId} 
              privateRoomID={route.params.id} 
              otherUserPushToken={otherUserPushToken}
              privateRoomName={route.params.name} 
              messageReplyTo={messageReplyTo} 
              chatRoomUserID={chatRoomUserID}
              removeMessageReplyTo={() => setMessageReplyTo(null)}
            />
        </View>
    )
}

export default PrivateRoomScreen;