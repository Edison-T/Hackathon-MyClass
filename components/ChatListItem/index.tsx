import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Pressable, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom, Message } from '../../types';
import styles from './style';
import moment from 'moment';
import Swipeout from 'react-native-swipeout';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import ConversationListItem from '../ConversationListItem'; // A.K.A 'index.tsx'
import { Auth, graphqlOperation, API } from 'aws-amplify';
import {S3Image} from 'aws-amplify-react-native';
import { Ionicons } from '@expo/vector-icons';

import { getChatRoom, getUser } from '../../Screens/queries';
import * as mutations from '../../src/graphql/mutations';
import { onCreateConversationUser, onDeleteConversationUser, onUpdateConversation, onUpdateConversationUser } from '../../src/graphql/subscriptions';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
    messages: Message;
    role: string;
    userID: String;
    chatRooms: any
    //onLongPress: () => void
}

const ChatListItem = (props: ChatListItemProps) => {
    const [conversations, setConversations] = useState([]);
    const [conversationUsersToken, setConversationUsersToken] = useState([]);
    const [conversationsButton, setConversationsButton] = useState(false);
    const { chatRoom, role, userID, chatRooms } = props;

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
    const navigation = useNavigation();
//*****I used route params to pass the role of the user so the app doesn't have
//to useEffect the user role everytime. I fear that the data gets lost in switching between pages. If this occurs, return back to using useEffect for user role thx */

    const updateChatRoomUserLastRead = async () => {
        if(chatRoom.lastMessage) {
            const userID = await Auth.currentAuthenticatedUser();
            try {
                const userData = await API.graphql(
                    graphqlOperation(
                        getChatRoom, {
                            id: chatRoom.id,
                        }
                    )
                )
                const currentChatRoomUserID = (userData.data.getChatRoom.chatRoomUsers.items.find((cru) => cru.userID === userID.attributes.sub).id)
                await API.graphql(
                    graphqlOperation(
                        mutations.updateChatRoomUser, {
                            input: {
                                id: currentChatRoomUserID,
                                lastMessageReadTimeStamp: chatRoom.lastMessage.updatedAt
                            }
                        }
                    )
                )
            } catch (e) {
                console.log(e);
                return;
            }      
        } else {
            return;
        }
            
    }

    const cruID = (chatRoom.chatRoomUsers.items.filter((i) => i.userID === userID))
    //console.log(chatRoom.chatRoomUsers.items.map((i) => i.userID))
    const timeStamp = (cruID.map(i => i.lastMessageReadTimeStamp)).toString()
    const unreadMessage = (chatRoom.messages.items.filter((i) => i.createdAt > timeStamp))
    const unreadMessageTimeStamp = (unreadMessage.map(i=> i.createdAt)) // displays the objects after the timestamp from "objects"
    const numberOfUnread = (unreadMessageTimeStamp.filter(Boolean).length) //number of unread

    const announcementTimeStamp = (cruID.map(i => i.lastAnnouncementReadTimeStamp)).toString()
    const unreadAnnouncement = (chatRoom.announcements.items.filter((i) => i.createdAt > announcementTimeStamp))
    const unreadAnnouncementTimeStamp = (unreadAnnouncement.map(i=> i.createdAt))
    const numberOfAnnouncementsUnread = (unreadAnnouncementTimeStamp.filter(Boolean).length) //number of unread
    //***** HEY, we can use updatedAt to account for unread EDITED announcements. However, it seems to bug out when there is only one announcement that is edited. Or else keep createdAt. */



    // useEffect(() => {
    //     const fetchUnreadMessages = async () => {
    //     const messagesData = await API.graphql(
    //         graphqlOperation(
    //           messagesByChatRoom, {
    //             chatRoomID: chatRoom.id,
    //             //createdAt: {gt: //greater than the crUser's timestamp of last message}
    //           }
    //         )
    //       )
      
    //       const oof = (messagesData.data.messagesByChatRoom.items.filter((messages) => messages.updatedAt > "2021-12-01T03:03:16.375Z",
    //       ))
    //       console.log(oof.map((oof) => oof.content))
    //     }
    //     fetchUnreadMessages();
    // }, [])


    //lastMessageReadTimeStamp
    
//     const fetchConversations = async () => {
//         try {

//           const userData = await API.graphql(
//               graphqlOperation(
//                   getChatRoom, {
//                       id: chatRoom.id,
//                   }
//               )
//           )

//           setConversations(userData.data.getChatRoom.conversations.items);
//           setConversationUsersToken(userData.data.getChatRoom.chatRoomUsers.items.filter(n => n.allowAllConversationNotifications === true).map(i => i.user.expoPushToken))
//       } catch (e) {
//           console.log(e);
//       }
//   }    
  
  const fetchConversations = async () => {
    try {
        const userData = await API.graphql(
            graphqlOperation(
                getUser, {
                    id: userID,
                }
            )
        )
        setConversations(userData.data.getUser.conversationUser.items.filter(i => i.conversation.chatRoomID === chatRoom.id))
        // const conversationInfo = (userData.data.getUser.conversationUser.items.filter(i => i.conversation.chatRoomID === chatRoom.id))
        // const conversation = (conversationInfo.map(i => i.conversation))
        // const conversationUsers = (conversation.map(i => i.conversationUsers.items.map(i => i.lastMessageReadTimeStamp)))
        // //const conversationUser = (conversationUsers.map())

        // const conversationLastMessageTime = (conversationInfo.map(i => i.lastMessageReadTimeStamp))
        // console.log(conversationLastMessageTime)

    } catch (e) {
        console.log(e);
    }
  };

  useEffect(() => {
      fetchConversations()
  }, [userID])
    
  const onClick = () => {
        updateChatRoomUserLastRead();
        navigation.navigate('Chat Room', {
            id: chatRoom.id,
            name: chatRoom.name,
            chatRoomID: chatRoom.id,
            chatRoomName: chatRoom.name,
            chatRoomImage: chatRoom.imageUri,
            role: role,
            conversations: conversations,
            userID: userID,
            conversationUsersToken: conversationUsersToken
        })
  }

  const listOfConversations = (conversations.map(i => i.id))

    useEffect(() => {
        const subscription = API.graphql(
        graphqlOperation(onUpdateConversation)
        ).subscribe({
        next: (data) => {
            const updatedConversation = data.value.data.onUpdateConversation.id;
            const checksListIfIDExists = (listOfConversations.includes(updatedConversation))
            if (checksListIfIDExists) {
            fetchConversations()
            } else {
            return;
            }
        } 
        });
        return () => subscription.unsubscribe();
    }, [conversations]);

    useEffect(() => {
        const subscription = API.graphql(
        graphqlOperation(onCreateConversationUser)
        ).subscribe({
        next: (data) => {
            const newConversationUser = data.value.data.onCreateConversationUser.user.id
            if (newConversationUser === userID) {
            fetchConversations()
            } else {
            return;
            }
        }
        });
        return () => subscription.unsubscribe();
    }, [userID]);

    useEffect(() => {
        const subscription = API.graphql(
        graphqlOperation(onUpdateConversationUser)
        ).subscribe({
        next: (data) => {
            const updatedConversationUser = data.value.data.onUpdateConversationUser.user.id
            if (updatedConversationUser === userID) {
                fetchConversations()
            } else {
                return;
            }  
        }
        });
        return () => subscription.unsubscribe();
    }, [userID]);

    useEffect(() => {
        const subscription = API.graphql(
          graphqlOperation(onDeleteConversationUser)
        ).subscribe({
          next: (data) => {
            const deletedUserID = data.value.data.onDeleteConversationUser.user.id
              if (deletedUserID === userID) {
                fetchConversations()
              } else {
                return;
              }          
          }
        });
        return () => subscription.unsubscribe();
    }, [userID]);

    //const conversations = (chatRoom.chatRoomUsers.items.conversations.items.map(i => i.))

    return ( 
        // <Swipeout right={swipeBtns} backgroundColor='transparent'> //onLongPress = {onLongPress}
            <View>
                <TouchableOpacity onPress={onClick} activeOpacity={0.5} style={styles.container}>
                    <View style={styles.leftContainer}>
                        <S3Image 
                            imgKey={chatRoom.imageUri} 
                            style={{ width: 60,  height: 60, aspectRatio: 1, borderRadius: 50, marginRight: 15}} 
                        />
                        {/* <View style={{width: 25, height: 25, borderRadius: 20, backgroundColor: '#00BFFF', left: -35, justifyContent: "center"}}><Text style={{ fontSize: 16,  fontFamily: "Avenir Next", color: "white", textAlign:"center" }}>7</Text></View> */}
                        <View style={styles.midContainer}>
                            <Text style={styles.username}>{chatRoom.name}</Text>
                            <Text 
                                numberOfLines={1} 
                                style={[styles.lastMessage, {marginRight: numberOfAnnouncementsUnread > 0 ? 90 : 30 && numberOfUnread > 0 ? 60 : 30}]}>
                                {chatRoom.lastMessage 
                                ? `${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content}`
                                : ""}
                            </Text>
                        </View> 
                        
                    </View>

                    <View>
                    <Text style={styles.time}>
                        {chatRoom.lastMessage && moment.utc(chatRoom.lastMessage.updatedAt).local().startOf('seconds').fromNow()}
                    </Text>

                        { numberOfUnread > 0 && numberOfUnread < 10
                            ?
                            <View style={{width: 27, height: 27, borderRadius: 35, backgroundColor: "#00BFFF", position: "absolute", alignSelf: "flex-end", top: 28, right: 45, justifyContent: "center" }} >
                                <Text style={{textAlign: "center", fontSize: 15, color: "white"}}>{numberOfUnread}</Text>
                            </View>
                            :
                            null
                        }
                        { numberOfUnread > 9
                            ?
                            <View style={{width: 27, height: 27, borderRadius: 35, backgroundColor: "#00BFFF", position: "absolute", alignSelf: "flex-end", top: 28, right: 45, justifyContent: "center" }} >
                                <Text style={{textAlign: "center", fontSize: 15, color: "white"}}>9+</Text>
                            </View>
                            :
                            null
                        }
                        
                        {   numberOfAnnouncementsUnread > 0 && numberOfAnnouncementsUnread < 10 ?
                            <View style={{width: 27, height: 27, borderRadius: 35, backgroundColor: "red", position: "absolute", top: 28, right: 78, justifyContent: "center", alignSelf: "flex-end" }} >
                                <Text style={{textAlign: "center", fontSize: 15, color: "white"}}>{numberOfAnnouncementsUnread}</Text>
                            </View>
                            :
                            null
                        } 

                        {   numberOfAnnouncementsUnread > 9 ?
                            <View style={{width: 27, height: 27, borderRadius: 35, backgroundColor: "red", position: "absolute", top: 28, right: 78, justifyContent: "center", alignSelf: "flex-end" }} >
                                <Text style={{textAlign: "center", fontSize: 15, color: "white"}}>9+</Text>
                            </View>
                            :
                            null
                        }

                    </View>
                </TouchableOpacity>

                { conversationsButton ?
                    <FlatList 
                    style={{ width: '100%' }}
                    ItemSeparatorComponent={renderSeparator}
                    data={conversations}
                    renderItem={({ item }) => <ConversationListItem conversation={item.conversation} role={role} userID={userID} /> }//onLongPress={() => confirmDelete(item.chatRoom)}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    />
                    :
                    null
                }

            </View>
            
        // </Swipeout>
    )
};

export default ChatListItem;

// const swipeBtns = [{
    //     text: 'Delete',
    //     backgroundColor: 'red',
    //     underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    //     onPress: () => {deleteChatRoom()}
    //     //add onpress function here; maybe delete chatRoom and flatlist item???
    //   }];