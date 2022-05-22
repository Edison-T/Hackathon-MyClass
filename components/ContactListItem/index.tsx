import React, { useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { User } from '../../types';
import styles from './style';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

import { API, graphqlOperation, Auth} from 'aws-amplify';
import {createChatRoom, createChatRoomUser, createPrivateRoom, createPrivateRoomUser} from '../../src/graphql/mutations'
import {S3Image} from 'aws-amplify-react-native';

export type ContactListItemProps = {
    user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onClick = async () => {
        try {
            // 1. Create a new Chat Room
            const newPrivateRoomData = await API.graphql(
                graphqlOperation(
                    createPrivateRoom, {
                        input: {
                            lastMessageID: "zz7050e7-b24d-4ce1-a048-e57da56ff3e7",
                            newMessageIcon: "false"
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
            console.log(e);
        }
    }


    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <S3Image imgKey={ user.imageUri } style={styles.avatar} />

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text numberOfLines={2} style={styles.status}>{user.role}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default ContactListItem;