import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Pressable, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom, Message } from '../../types';
import styles from './style';
import moment from 'moment';
import SettingsConversationsListItem from '../SettingsConversationsListItem'; // A.K.A 'index.tsx'
import { getUser } from '../../Screens/queries';
import { useEffect } from 'react';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import {S3Image} from 'aws-amplify-react-native';

import { getChatRoom, messagesByChatRoom } from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';
import { createMessage, updateChatRoom } from "../../src/graphql/mutations";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
    messages: Message;
    role: string;
    userID: String;
    style: any
}

const SettingsListItem = (props: ChatListItemProps) => {
    const { chatRoom, role, userID } = props;

    const cruID = (chatRoom.chatRoomUsers.items.filter((i) => i.userID === userID))
    const allNotifications = (cruID.map(i => i.allowAllNotifications).toString())
    const selectedNotifications = (cruID.map(i => i.allowSelectedNotifications).toString())

    const [radioButton1, setRadioButton1] = useState(eval(allNotifications));
    const [radioButton2, setRadioButton2] = useState(eval(selectedNotifications));
    const [conversations, setConversations] = useState([]);

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

    const onClickSelectedNotifications = async () => {
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
                            allowAllNotifications: false,
                            allowSelectedNotifications: true,
                        }
                    }
                )
            )
        } catch (e) {
            console.log(e);
            return;
        }
    }

    const onClickAllNotifications = async () => {
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
                            allowAllNotifications: true,
                            allowSelectedNotifications: false,
                        }
                    }
                )
            )
        } catch (e) {
            console.log(e);
            return;
        }
    }

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
        } catch (e) {
            console.log(e);
        }
      };

    useEffect(() => {
        fetchConversations();
    }), [userID]


   
    return ( 
            <View>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <S3Image 
                            imgKey={chatRoom.imageUri} 
                            style={{ width: 60,  height: 60, aspectRatio: 1, borderRadius: 50, marginRight: 15}} 
                            resizeMode="contain"
                        />

                        <View style={styles.midContainer}>
                            <Text style={styles.chatName} numberOfLines={1}>{chatRoom.name}</Text>
                        </View> 

                        <View style={{flexDirection: "row", alignSelf: "center", position: "absolute", right: 20}}>
                            <TouchableOpacity style={{flexDirection: "row", marginRight: 30}} onPress={() => {setRadioButton1(true); setRadioButton2(false); onClickAllNotifications();}}>
                                <View style={[{
                                    height: 24,
                                    width: 24,
                                    borderRadius: 12,
                                    borderWidth: 2,
                                    borderColor: '#00BDFF',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 22
                                }, props.style]}>
                                {
                                    radioButton1 ?
                                    <View style={{
                                        height: 12,
                                        width: 12,
                                        borderRadius: 6,
                                        backgroundColor: '#00BDFF',
                                    }}/>
                                    : null
                                }
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {setRadioButton2(true); setRadioButton1(false); onClickSelectedNotifications();}}>
                                <View style={[{
                                    height: 24,
                                    width: 24,
                                    borderRadius: 12,
                                    borderWidth: 2,
                                    borderColor: '#00BDFF',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }, props.style]}>
                                {
                                    radioButton2 ?
                                    <View style={{
                                        height: 12,
                                        width: 12,
                                        borderRadius: 6,
                                        backgroundColor: '#00BDFF',
                                    }}/>
                                    : null
                                }
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>

                { conversations.length > 0 ?
                    <View>
                        <Text style={[styles.chatName, { left: 10, textDecorationLine: "underline" }]}>Conversations:</Text>

                        <FlatList 
                                style={{ width: '100%' }}
                                ItemSeparatorComponent={renderSeparator}
                                data={conversations}
                                renderItem={({ item }) => <SettingsConversationsListItem conversation={item.conversation} role={role} userID={userID} /> }//onLongPress={() => confirmDelete(item.chatRoom)}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}
                        />
                    </View>
                :
                    null
                }

            </View>
    )
};

export default SettingsListItem;
