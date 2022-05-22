import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Pressable, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom, GroupRoom, PrivateRoom } from '../../types';
import styles from './style';
import moment from 'moment';
import Swipeout from 'react-native-swipeout';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import {S3Image} from 'aws-amplify-react-native';

import { getChatRoom, messagesByChatRoom } from '../../src/graphql/queries';
import { useState } from 'react';
import * as mutations from '../../src/graphql/mutations';
import { getPrivateRoom } from '../../Screens/queries';

export type PrivateRoomListItemProps = {
    privateRoom: PrivateRoom;
    userID: String;
}

const PrivateRoomListItem = (props: PrivateRoomListItemProps) => {
    const { privateRoom, userID } = props;
    const [ otherUser, setOtherUser] = useState(null);

    const navigation = useNavigation();

    // useEffect(() => {
    //     const getOtherUser = async () => {
    //     const userInfo = await Auth.currentAuthenticatedUser();
    //     if (privateRoom.privateRoomUsers.items[0].user.id === userInfo.attributes.sub) {
    //         setOtherUser(privateRoom.privateRoomUsers.items[1].user);
    //     } else {
    //         setOtherUser(privateRoom.privateRoomUsers.items[0].user);
    //     }
    //     }
    //     getOtherUser();
    // }, [])

    const updatePrivateRoomUserLastRead = async () => {
        if(privateRoom.lastMessage) {
            const userID = await Auth.currentAuthenticatedUser();
            try {
                const userData = await API.graphql(
                    graphqlOperation(
                        getPrivateRoom, {
                            id: privateRoom.id,
                        }
                    )
                )
                const currentPrivateRoomUserID = (userData.data.getPrivateRoom.privateRoomUsers.items.find((cru) => cru.userID === userID.attributes.sub).id)
                await API.graphql(
                    graphqlOperation(
                        mutations.updatePrivateRoomUser, {
                            input: {
                                id: currentPrivateRoomUserID,
                                lastMessageReadTimeStamp: privateRoom.lastMessage.updatedAt
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

    const cruID = (privateRoom.privateRoomUsers.items.filter((i) => i.userID === userID))
    const timeStamp = (cruID.map(i => i.lastMessageReadTimeStamp)).toString()
    const unreadMessage = (privateRoom.messages.items.filter((i) => i.createdAt > timeStamp))
    const unreadMessageTimeStamp = (unreadMessage.map(i=> i.createdAt)) // displays the objects after the timestamp from "objects"
    const numberOfUnread = (unreadMessageTimeStamp.filter(Boolean).length) //number of unread

    useEffect(() => {
        const getOtherUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setOtherUser(privateRoom.privateRoomUsers.items.filter(u => u.user.id !== userInfo.attributes.sub).map(u => u.user))
        }
        getOtherUser()
    }, [])

    if (!otherUser) {
        return null;
      }

    const otherUserImageUri = otherUser.map(i => i.imageUri).toString();
    const otherUserName = otherUser.map(i => i.name).toString();

    const onClick = () => {
        updatePrivateRoomUserLastRead();
        navigation.navigate('Private Chat Room', {
        id: privateRoom.id,
        name: otherUserName,
        privateRoomID: privateRoom.id,
        privateRoomName: privateRoom.name,
        })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <S3Image imgKey={otherUserImageUri} style={styles.avatar}/>

            <View style={styles.midContainer}>
                <Text style={styles.username}>{otherUserName}</Text>
                <Text
                numberOfLines={1}
                style={[styles.lastMessage, {marginRight: numberOfUnread > 0 ? 60 : 0}]}>
                {privateRoom.lastMessage
                    ? `${privateRoom.lastMessage.content}`
                    : ""}
                </Text>
            </View>

            </View>
            
            <View>
                <Text style={styles.time}>
                {privateRoom.lastMessage && moment.utc(privateRoom.lastMessage.updatedAt).local().startOf('seconds').fromNow()}
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
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
};


export default PrivateRoomListItem;
