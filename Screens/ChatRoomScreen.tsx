import React from 'react';
import { FlatList, Text, View, StyleSheet, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ChatMessage from '../components/ChatMessage';
import InputBox from '../components/InputBox';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import AnnouncementDisplay from '../components/CreateAnnouncementButton';
import { getChatRoom } from "./queries";
import {API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from '../src/graphql/queries';
import { messagesByChatRoom, listChatRoomUsers } from '../src/graphql/queries';
import { onCreateAnnouncement, onCreateMessage } from '../src/graphql/subscriptions';
import { useState } from 'react';
import * as mutations from '../src/graphql/mutations';
import ConversationListItem from '../components/ConversationListItem';

const ChatRoomScreen = ({route}) => {
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    //const [loadedMessages, setLoadedMessages] = useState([]);
    const [ nextToken, setNextToken ] = useState('firstPage') //sets nextToken for the next page of messages
    const [myId, setMyId] = useState(null);
    const [myName, setMyName] = useState(null);
    const [messageReplyTo, setMessageReplyTo] = useState(null);
    const [usersTokens, setUsersTokens] = useState ([]);
    const [inputBoxListUsers, setInputBoxListUsers] = useState([]);
    const [users, setUsers] = useState([]); //gives the real user ids
    const [CRUID, setCRUID] = useState(null);
    //const [CRULastAnnouncementTimeRead, setCRULastAnnouncementTimeRead] = useState(null);
    //const [chatRoomLastAnnouncementTime, setChatRoomLastAnnouncementTime] = useState(null);
    const [poundBoolean, setPoundBoolean] = useState(false);
    const [textInput, setTextInput] = useState('')
    const navigation = useNavigation();
    const {chatRoomID, chatRoomName, chatRoomImage, role, conversations, userID, conversationUsersToken} = route.params;

    const updateChatRoomUserLastRead = async () => {
      const userID = await Auth.currentAuthenticatedUser();
      try {
          const userData = await API.graphql(
              graphqlOperation(
                  getChatRoom, {
                      id: chatRoomID,
                  }
              )
          )
          const currentChatRoomUserID = (userData.data.getChatRoom.chatRoomUsers.items.find((cru) => cru.userID === userID.attributes.sub).id)
          if (userData.data.getChatRoom.lastMessage) {
            const timestamp = (userData.data.getChatRoom.lastMessage.updatedAt)
            await API.graphql(
                graphqlOperation(
                    mutations.updateChatRoomUser, {
                        input: {
                            id: currentChatRoomUserID,
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

    const updateCRULastAnnouncementRead = async () => {
      const userID = await Auth.currentAuthenticatedUser();
      try {
        const userData = await API.graphql(
            graphqlOperation(
                getChatRoom, {
                    id: chatRoomID,
                }
            )
        )
        const currentChatRoomUserID = (userData.data.getChatRoom.chatRoomUsers.items.find((cru) => cru.userID === userID.attributes.sub).id)
        if (userData.data.getChatRoom.lastAnnouncement) {
          const timestamp = (userData.data.getChatRoom.lastAnnouncement.updatedAt)
          await API.graphql(
            graphqlOperation(
                mutations.updateChatRoomUser, {
                    input: {
                        id: currentChatRoomUserID,
                        lastAnnouncementReadTimeStamp: timestamp
                    }
                }
            )
          ) 
        } else {
          return
        }
      } catch (e) {
      console.log(e);
      return;
      }
    }

    const onPress = () => {
      if (role == "teacher") {
        navigation.navigate('Class Settings', {
          classID: chatRoomID,
        });
      } else {
        navigation.navigate('Classroom Settings', {
          classID: chatRoomID,
          className: chatRoomName,
          classImage: chatRoomImage
        });
        }
    };

    const navigateToAnnouncement = () => {
        navigation.navigate('Announcements', {
          classID: chatRoomID,
          className: chatRoomName,
          classImage: chatRoomImage,
          role: role,
          CRUID: CRUID
        });
    };
    
    useEffect(() => {
      const gestureHandler = navigation.addListener('blur', updateChatRoomUserLastRead); //focus = does something when you first enter the screen; blur = does something when you exit the screen; state = does both
      //console.log('exited')
      return () => {
        gestureHandler;
      };
    }, [navigation]);//when exit screen, update the user last read!

  // useEffect(() => {
  //   navigation.addListener('beforeRemove', (e) => {
  //     e.preventDefault()
  //     console.log('coll')
  //     //clear setInterval here and go back
  // })
  // }, [navigation])
  

    useLayoutEffect (() => {
      navigation.setOptions({
          headerRight: () => (
            <View>
              <View style={{flexDirection: "row", alignItems: "center"}}>

                <TouchableOpacity
                  style={{marginRight: 15}}
                  activeOpacity={0.5}
                  onPress={() => {navigateToAnnouncement(); updateCRULastAnnouncementRead()}}>
                  <MaterialCommunityIcons
                        name="bullhorn"
                        size={30}
                        color = 'white'
                    />
                  {/* { CRULastAnnouncementTimeRead < chatRoomLastAnnouncementTime || CRULastAnnouncementTimeRead === null ?
                    <View style={{width: 12, height: 12, borderRadius: 15, backgroundColor: "red", position: "absolute", alignSelf: "flex-end", bottom: 19 }}/>
                    :
                    null
                  } */}
                </TouchableOpacity>

                <TouchableOpacity
                  style={{marginRight: 10}}
                  activeOpacity={0.5}
                  onPress={onPress}>
                  <Ionicons
                        name="ios-settings-sharp" 
                        size={30}
                        color = 'white'
                    />
                </TouchableOpacity>
              </View>
            </View>
            ),
            headerLeft: () => (
              <View>
                <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {navigation.navigate("Chats Screen")}}>
                <Ionicons
                      name="chevron-back-outline" 
                      size={35}
                      color = 'white'
                  />
              </TouchableOpacity>
              </View>
            )
      }), [navigation]});
      

    const fetchMessages = async () => {
      if (nextToken == "firstPage") {
        const messagesData = await API.graphql(
          graphqlOperation(
            messagesByChatRoom, {
              chatRoomID: route.params.id,
              sortDirection: "DESC",
              limit: 7,
            }
          )
        )
        setMessages(messagesData.data.messagesByChatRoom.items);
        setNextToken(messagesData.data.messagesByChatRoom.nextToken)
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
            messagesByChatRoom, {
              chatRoomID: route.params.id,
              sortDirection: "DESC",
              limit: 7,
              nextToken
            }
          )
        )
        setNextToken(messagesData.data.messagesByChatRoom.nextToken)
        const newMessages = messagesData.data.messagesByChatRoom.items

          const newArrayOfMessages = messages.concat(newMessages);
          setMessages(newArrayOfMessages)
      } else {
        //console.log('No more messages are left to fetch')
        return
      }
    }

  
    useEffect(() => {
      fetchMessages();
    }, [])
  
    useEffect(() => {
      const getMyId = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        setMyId(userInfo.attributes.sub);
        setMyName(userInfo.signInUserSession.accessToken.payload.username)
      }
      getMyId();
    }, [])

    useEffect(() => {
      const subscription = API.graphql(
        graphqlOperation(onCreateMessage)
      ).subscribe({
        next: (data) => {
          const newMessage = data.value.data.onCreateMessage;
  
          if (newMessage.chatRoomID !== route.params.id) {
            return;
            // this is a check for chatRoomID. This is here so if someone else from a random chatRoom sends a message, our chatRoom is not affected and does not use this subscription update. This is most performant efficient! :)
          }
      
          setMessages(messages => [newMessage, ...messages]);
        }
      });
  
      return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
      const fetchChatRoomInfo = async () => {
          try {
              const currentUser = await Auth.currentAuthenticatedUser()
              const currentUserID = currentUser.attributes.sub
              const userData = await API.graphql(
                  graphqlOperation(
                      getChatRoom, {
                          id: chatRoomID,
                      }
                  )
              )
              setUsers(userData.data.getChatRoom.chatRoomUsers.items.map(i => i.user.id))
              const whoWantsAllNotifications = (userData.data.getChatRoom.chatRoomUsers.items.filter((n) => n.allowAllNotifications === true))
              setUsersTokens(whoWantsAllNotifications.map((u) => u.user.expoPushToken))
              const allInputUsers = (userData.data.getChatRoom.chatRoomUsers.items.map(i => i.user))
              setInputBoxListUsers(allInputUsers.filter(u => u.id !== currentUserID))
              setCRUID(userData.data.getChatRoom.chatRoomUsers.items.find((i) => i.userID === currentUserID).id)
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
      fetchChatRoomInfo()
  }, [])

  
  

  


    return (
        <View style={{ flex:1, paddingHorizontal: 5 }}>
            <FlatList
                onEndReachedThreshold={0}
                onEndReached={fetchMessagesPage}
                data={messages}
                renderItem={({ item }) => 
                  <ChatMessage 
                    myId={myId} 
                    myName={myName}
                    message={item} 
                    setAsMessageReply={() => setMessageReplyTo(item)}
                  />
                }
                inverted
                showsVerticalScrollIndicator={false}
            />

            <InputBox 
              chatRoomID={route.params.id} 
              usersTokens={usersTokens}
              chatRoomName={chatRoomName}
              CRUID={CRUID}
              myId={myId}
              myName={myName}
              inputBoxListUsers={inputBoxListUsers}
              messageReplyTo={messageReplyTo} 
              removeMessageReplyTo={() => setMessageReplyTo(null)}
            />

            { poundBoolean === true ? 
              <View style={{ width: '95%', position: "absolute", borderWidth: 1, alignSelf: "center", borderRadius: 10, backgroundColor: "white", height: "48%", marginTop: 13 }} >

                <View style={{alignItems: "center", flexDirection: "row", borderTopWidth: 0.5}}>
                    <View style={styles.mainContainer}>
                      <TextInput 
                          style={styles.textInput} 
                          placeholder='Enter name (40 max characters)'
                          multiline
                          value={textInput}
                          onChangeText={setTextInput}
                          maxLength={40}
                          numberOfLines={1}
                      />
                    </View>

                    {loading ?
                      <View 
                        style={[styles.buttons, { padding: 17, height: 56 }]}
                      >
                        <ActivityIndicator size="small" color="white" />
                      </View>
                    :
                      <TouchableOpacity 
                      style={styles.buttons}
                      onPress={pressToCreateConversation}
                      >
                        <Ionicons name= "add-outline" size={30} color="white"/>
                      </TouchableOpacity>
                    }
                </View>

              </View>
              :
              null
            }

        </View>
    )
}

const styles = StyleSheet.create({
  text: {
      fontFamily: "Avenir Next", 
      color: "white", 
      fontSize: 10, 
      fontWeight: '500',
  },
  buttons: {
      backgroundColor: "#00BFFF",
      borderBottomRightRadius: 10,
      padding: 12,
      justifyContent: "center",
      alignItems: "center",
    },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  mainContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 40,
    marginRight: 10,
    width: "84%"
  },
})

export default ChatRoomScreen;

// idea for avatar and name in custom header: