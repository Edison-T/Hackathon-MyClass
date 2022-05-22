import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, Animated, TouchableOpacity, Alert } from 'react-native';
import { ChatRoom, User } from '../../types';
import styles from './style';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import Swipeout from 'react-native-swipeout';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {createPrivateRoom, createPrivateRoomUser} from '../../src/graphql/mutations'


import { API, graphqlOperation, Auth} from 'aws-amplify';
import {S3Image} from 'aws-amplify-react-native';
import * as mutations from '../../src/graphql/mutations';
import { getChatRoomUser } from '../../src/graphql/queries';



export type ChatRoomListUsersProps = {
    user: User;
    chatRoom: ChatRoom
    onLongPress: () => void
}


const ChatRoomListUsers = (props: ChatRoomListUsersProps) => {

    const {user, chatRoom, onLongPress} = props;
    const navigation = useNavigation();

    const onClick = async () => {
        try {
            // 1. Create a new Chat Room
            const newPrivateRoomData = await API.graphql(
                graphqlOperation(
                    createPrivateRoom, {
                        input: {
                            lastMessageID: "zz7050e7-b24d-4ce1-a048-e57da56ff3e7",
                        }
                    }
                )
            ) 
            
            if (!newPrivateRoomData) {
                Alert.alert("Oops, an error occurred")
                console.log("Failed to create private chat :( ")
                return;
            }

            const newPrivateRoom = newPrivateRoomData.data.createPrivateRoom;
            
            // 2. Add person on contact list to the chat room
            await API.graphql(
                graphqlOperation(
                    createPrivateRoomUser, {
                        input: {
                        userID: user.id,
                        privateRoomID: newPrivateRoom.id,
                        }
                    }
                )
            )

            // 3. Add myself to the chat room
            const userInfo = await Auth.currentAuthenticatedUser();
            await API.graphql(
                graphqlOperation(
                    createPrivateRoomUser, {
                        input: {
                        userID: userInfo.attributes.sub,
                        privateRoomID: newPrivateRoom.id,
                        }
                    }
                )
            )

            navigation.navigate('Private Chat Room', {
                id: newPrivateRoom.id,
                name: user.name, // find a way to create name based on ID
            })

        } catch (e) {
            Alert.alert("Oops! An error has occurred")
            console.log(e);
        }
    }

    const createPrivateWithUser = () => {
        Alert.alert(
            `Chat with ${user.name}?`,
            `Do you want to privately chat with ${user.name}?`,
            [
                {
                    text: "Yes",
                    onPress: () => onClick(),
                },
                {
                    text: "Cancel",
                    style: "destructive"
                }
            ]
        )
    }

    const rightSwipeActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-200, 0],
            outputRange: [1.33, 0],
          });
        return (
            <>
          <Animated.View
            style={{
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'flex-end',
              transform: [{ scale }],
              borderRadius: 10
            }}
          >
            <TouchableOpacity
                style={{padding: 20}}
                activeOpacity={0.5}
                onPress={onLongPress}>
                <Ionicons
                      name="trash-outline" 
                      size={35}
                      color = 'white'
                  />
            </TouchableOpacity>
            
          </Animated.View>

            <Animated.View
            style={{
            backgroundColor: '#00BFFF',
            justifyContent: 'center',
            alignItems: 'flex-end',
            transform: [{ scale }],
            borderRadius: 10
            }}
            >
            <TouchableOpacity
                style={{padding: 20}}
                activeOpacity={0.5}
                onPress={createPrivateWithUser}>
                <Ionicons
                    name="chatbox-outline" 
                    size={35}
                    color = 'white'
                />
            </TouchableOpacity>
            </Animated.View>
          </>
        );
      };    


    return (
        <Swipeable renderRightActions={rightSwipeActions}>                
            <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <S3Image 
                            imgKey={user.imageUri} 
                            style={{ width: 60,  height: 60, aspectRatio: 1, borderRadius: 50, marginRight: 15}} 
                        /> 
                        <View style={styles.midContainer}>
                            <Text style={styles.username}>{user.name}</Text>
                            {user.role === "teacher" && (<Text numberOfLines={2} style={styles.status}>{"Teacher"}</Text>)}
                        </View>
                    </View>
                </View>
        </Swipeable>
    )
};

export default ChatRoomListUsers;