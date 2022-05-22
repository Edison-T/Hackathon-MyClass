import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Pressable, TouchableWithoutFeedback } from 'react-native';
import { Conversation, Message } from '../../types';
import styles from './style';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import {S3Image} from 'aws-amplify-react-native';

import * as mutations from '../../src/graphql/mutations';
import { getConversation } from '../../src/graphql/queries';

export type ConversationListItemProps = {
    conversation: Conversation;
    messages: Message;
    role: string;
    userID: String;
    conversationUsersToken: String
    //onLongPress: () => void
}

const ConversationListItem = (props: ConversationListItemProps) => {
    const { conversation, role, userID, conversationUsersToken } = props;

    const navigation = useNavigation();

    const updateConversationLastRead = async () => {
        const userID = await Auth.currentAuthenticatedUser();
        try {
            const userData = await API.graphql(
                graphqlOperation(
                    getConversation, {
                        id: conversation.id,
                    }
                )
            )
            const currentConversationUserID = (userData.data.getConversation.conversationUsers.items.find((cru) => cru.userID === userID.attributes.sub).id)
            if (conversation.lastMessage) {
                await API.graphql(
                    graphqlOperation(
                        mutations.updateConversationUser, {
                            input: {
                                id: currentConversationUserID,
                                lastMessageReadTimeStamp: conversation.lastMessage.createdAt
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

//*****I used route params to pass the role of the user so the app doesn't have
//to useEffect the user role everytime. I fear that the data gets lost in switching between pages. If this occurs, return back to using useEffect for user role thx */

    // const updateconversationUserLastRead = async () => {
    //         const userID = await Auth.currentAuthenticatedUser();
    //         try {
    //             const userData = await API.graphql(
    //                 graphqlOperation(
    //                     getconversation, {
    //                         id: conversation.id,
    //                     }
    //                 )
    //             )
    //             const currentconversationUserID = (userData.data.getconversation.conversationUsers.items.find((cru) => cru.userID === userID.attributes.sub).id)
    //             await API.graphql(
    //                 graphqlOperation(
    //                     mutations.updateconversationUser, {
    //                         input: {
    //                             id: currentconversationUserID,
    //                             lastMessageReadTimeStamp: conversation.lastMessage.updatedAt
    //                         }
    //                     }
    //                 )
    //             )
    //         } catch (e) {
    //             console.log(e);
    //             return;
    //         }
    // }

    // const cruID = (conversation.conversationUsers.items.filter((i) => i.userID === userID))
    // const timeStamp = (cruID.map(i => i.lastMessageReadTimeStamp)).toString()
    // const unreadMessage = (conversation.messages.items.filter((i) => i.createdAt > timeStamp))
    // const unreadMessageTimeStamp = (unreadMessage.map(i=> i.createdAt)) // displays the objects after the timestamp from "objects"
    // const numberOfUnread = (unreadMessageTimeStamp.filter(Boolean).length) //number of unread

    // const announcementTimeStamp = (cruID.map(i => i.lastAnnouncementReadTimeStamp)).toString()
    // const unreadAnnouncement = (conversation.announcements.items.filter((i) => i.createdAt > announcementTimeStamp))
    // const unreadAnnouncementTimeStamp = (unreadAnnouncement.map(i=> i.createdAt))
    // const numberOfAnnouncementsUnread = (unreadAnnouncementTimeStamp.filter(Boolean).length) //number of unread
    //***** HEY, we can use updatedAt to account for unread EDITED announcements. However, it seems to bug out when there is only one announcement that is edited. Or else keep createdAt. */

    // useEffect(() => {
    //     const fetchUnreadMessages = async () => {
    //     const messagesData = await API.graphql(
    //         graphqlOperation(
    //           messagesByconversation, {
    //             conversationID: conversation.id,
    //             //createdAt: {gt: //greater than the crUser's timestamp of last message}
    //           }
    //         )
    //       )
      
    //       const oof = (messagesData.data.messagesByconversation.items.filter((messages) => messages.updatedAt > "2021-12-01T03:03:16.375Z",
    //       ))
    //       console.log(oof.map((oof) => oof.content))
    //     }
    //     fetchUnreadMessages();
    // }, [])


    //lastMessageReadTimeStamp
    const onClick = () => {
        updateConversationLastRead();
        navigation.navigate('Conversation Room', {
            id: conversation.id,
            name: conversation.name,
            conversationID: conversation.id,
            conversationName: conversation.name,
            role: role,
            conversationUsersToken: conversationUsersToken,
        })
    }

    const cruID = (conversation.conversationUsers.items.filter((i) => i.userID === userID))
    const timeStamp = (cruID.map(i => i.lastMessageReadTimeStamp)).toString()
    const unreadMessage = (conversation.messages.items.filter((i) => i.createdAt > timeStamp))
    const unreadMessageTimeStamp = (unreadMessage.map(i => i.createdAt)) // displays the objects after the timestamp from "objects"
    const numberOfUnread = (unreadMessageTimeStamp.filter(Boolean).length) //number of unread

    return ( 
        // <Swipeout right={swipeBtns} backgroundColor='transparent'> //onLongPress = {onLongPress}
            <View>
                <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={onClick}>
                    <View style={styles.leftContainer}>
                        <View style={styles.midContainer}>
                            <Text style={styles.username}># {conversation.name}</Text>
                            { numberOfUnread > 0 ?
                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                    <MaterialCommunityIcons 
                                        name="message-reply"
                                        size={20}
                                        color="#00BFFF"
                                    />
                                    <Text 
                                        numberOfLines={1} 
                                        style={{ color: "#00BFFF", fontWeight: "800", marginLeft: 5 }}>
                                        New Chat
                                    </Text>
                                </View>
                            :
                                <Text 
                                    numberOfLines={1} 
                                    style={styles.lastMessage}>
                                    {conversation.lastMessage 
                                    ? `${conversation.lastMessage.user.name}: ${conversation.lastMessage.content}`
                                    : ""}
                                </Text>
                            }
                        </View> 

                        
                    </View>

                    <View>
                    <Text style={styles.time}>
                        {conversation.lastMessage && moment.utc(conversation.lastMessage.updatedAt).local().startOf('seconds').fromNow()}
                    </Text>

                        {/* { numberOfUnread > 0 && numberOfUnread < 10
                            ?
                            <View style={{width: 27, height: 27, borderRadius: 35, backgroundColor: "#00BFFF", position: "absolute", alignSelf: "flex-end", top: 28, justifyContent: "center" }} >
                                <Text style={{textAlign: "center", fontSize: 15, color: "white"}}>{numberOfUnread}</Text>
                            </View>
                            :
                            null
                        }
                        { numberOfUnread > 9
                            ?
                            <View style={{width: 27, height: 27, borderRadius: 35, backgroundColor: "#00BFFF", position: "absolute", alignSelf: "flex-end", top: 28, justifyContent: "center" }} >
                                <Text style={{textAlign: "center", fontSize: 15, color: "white"}}>9+</Text>
                            </View>
                            :
                            null
                        }
                        
                        {   numberOfAnnouncementsUnread > 0 && numberOfAnnouncementsUnread < 10 ?
                            <View style={{width: 27, height: 27, borderRadius: 35, backgroundColor: "red", position: "absolute", top: 28, right: 33, justifyContent: "center", alignSelf: "flex-end" }} >
                                <Text style={{textAlign: "center", fontSize: 15, color: "white"}}>{numberOfAnnouncementsUnread}</Text>
                            </View>
                            :
                            null
                        } 

                        {   numberOfAnnouncementsUnread > 9 ?
                            <View style={{width: 27, height: 27, borderRadius: 35, backgroundColor: "red", position: "absolute", top: 28, right: 33, justifyContent: "center", alignSelf: "flex-end" }} >
                                <Text style={{textAlign: "center", fontSize: 15, color: "white"}}>9+</Text>
                            </View>
                            :
                            null
                        }   */}
                    </View>
                </TouchableOpacity>
            </View>
            
        // </Swipeout>
    )
};

export default ConversationListItem;

// const swipeBtns = [{
    //     text: 'Delete',
    //     backgroundColor: 'red',
    //     underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    //     onPress: () => {deleteconversation()}
    //     //add onpress function here; maybe delete conversation and flatlist item???
    //   }];