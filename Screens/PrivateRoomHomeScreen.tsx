import React, {useEffect, useLayoutEffect, useContext, useRef} from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Alert, RefreshControl, Platform } from 'react-native';
import { Avatar } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import ChatListItem from '../components/ChatListItem'; // A.K.A 'index.tsx'
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

import ChatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';
import ChooseYourRoleButton from '../components/ChooseYourRoleButton';
import { User } from '../types';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as mutations from '../src/graphql/mutations';
import * as queries from '../src/graphql/queries';
import { getUser } from './queries';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { onCreateChatRoom, onCreateChatRoomUser, onCreatePrivateRoomUser, onDeleteChatRoom, onDeleteChatRoomUser, onDeletePrivateRoomUser, onUpdateChatRoom, onUpdatePrivateRoom, onUpdatePrivateRoomUser } from '../src/graphql/subscriptions';
import PrivateRoomListItem from '../components/PrivateRoomListItem';
import PrivateNewMessageButton from '../components/PrivateNewMessageButton';

const PrivateRoomHomeScreen = ({navigation}) => {
    const [privateRooms, setPrivateRooms] = useState ([]);
    const [role, setRole] = useState('none');
    const [userID, setUserID] = useState('')
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);

    
        const fetchPrivateRooms = async () => {
            try {
                //setLoading(true)
                const userInfo = await Auth.currentAuthenticatedUser();

                const userData = await API.graphql(
                    graphqlOperation(
                        getUser, {
                            id: userInfo.attributes.sub,
                        }
                    )
                )
                setPrivateRooms(userData.data.getUser.privateRoomUser.items)
                setRole(userData.data.getUser.role)
                setUserID(userData.data.getUser.id);
                setRefreshing(false)
                //setLoading(false)
            } catch (e) {
                console.log(e);
                return
            }
        }
        
    const listOfPrivateRooms = (privateRooms.map(i => i.privateRoomID))

    useEffect(() => {
        fetchPrivateRooms();
      }, [userID])

    useEffect(() => {
      const subscription = API.graphql(
        graphqlOperation(onCreatePrivateRoomUser)
      ).subscribe({
        next: (data) => {
          const newUserID = data.value.data.onCreatePrivateRoomUser.user.id
          
          if (newUserID === userID) {
            fetchPrivateRooms()
          } else {
            //console.log("This room does not exist for this user")
            return;
          }
        }
      });
      return () => subscription.unsubscribe();
  }, [userID]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdatePrivateRoom)
    ).subscribe({
      next: (data) => {
        const updatedGroupRoom = data.value.data.onUpdatePrivateRoom.id;
        const checksListIfIDExists = (listOfPrivateRooms.includes(updatedGroupRoom))
        if (checksListIfIDExists) {
          fetchPrivateRooms()
        } else {
          //console.log("This room does not exist for this user")
          return;
        }
      } // doesn't work because it gives us an empty array of chatrooms when the user logs in. So weird; chatrooms are not set in this screen, but does on the list items.... However, when we refresh this code, it works, but we must manually refresh this code screen.
    });
    return () => subscription.unsubscribe();
}, [privateRooms]);

  useEffect(() => {
      const subscription = API.graphql(
        graphqlOperation(onDeletePrivateRoomUser)
      ).subscribe({
        next: (data) => {
          const deletedUserID = data.value.data.onDeletePrivateRoomUser.user.id
            if (deletedUserID === userID) {
              fetchPrivateRooms()
            } else {
              return;
            }          
        }
      });
      return () => subscription.unsubscribe();
  }, [userID]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdatePrivateRoomUser)
    ).subscribe({
      next: (data) => {
        const updatedUserID = data.value.data.onUpdatePrivateRoomUser.user.id
          if (updatedUserID === userID) {
            fetchPrivateRooms()
          } else {
            //console.log("This room does not exist for this user")
            return;
          }  
      }
    });
    return () => subscription.unsubscribe();
  }, [userID]);

    const navigateToSettings = () => {
        navigation.navigate('Settings', { role: role, userID: userID })
    };

    useLayoutEffect (() => {
        navigation.setOptions({
            title: "My Privates",
            headerStyle: { backgroundColor: "#00BFFF" },
            headerTitleStyle: {color: "white"},
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <TouchableOpacity
                    onPress={navigateToSettings}
                >
                    <Ionicons
                      name="person-circle-outline" 
                      size={40}
                      color = 'white'
                  />
                </TouchableOpacity>
              </View>)}), [navigation]});

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

    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
                <FlatList
                    style={{ width: '100%' }}
                    ItemSeparatorComponent={renderSeparator}
                    data={privateRooms}
                    renderItem={({ item }) => <PrivateRoomListItem privateRoom={item.privateRoom} userID={userID} /> }
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                      <RefreshControl refreshing={refreshing} onRefresh={fetchPrivateRooms} tintColor="#7DE1FF" />
                    }
                />
             {/* {role === 'none' ? <ChooseYourRoleButton/> : <PrivateNewMessageButton/>} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
})

export default PrivateRoomHomeScreen