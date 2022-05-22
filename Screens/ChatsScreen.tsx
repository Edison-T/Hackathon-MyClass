import React, {useEffect, useLayoutEffect, useContext, useRef, useCallback} from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Alert, ActivityIndicator, RefreshControl } from 'react-native';
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
import { onCreateChatRoom, onCreateChatRoomUser, onCreateConversationUser, onDeleteAnnouncement, onDeleteChatRoom, onDeleteChatRoomUser, onUpdateAnnouncement, onUpdateChatRoom, onUpdateChatRoomUser, onUpdateConversation, onUpdateConversationUser, onUpdateUser } from '../src/graphql/subscriptions';


const ChatsScreen = ({navigation, route}) => {
    const [chatRooms, setChatRooms] = useState ([]); //should i do [null] instead?
    const [userID, setUserID] = useState('')
    const [role, setRole] = useState('none');
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    //or maybe use props from types because useState is too buggy?
    
    
    const fetchChatRooms = async () => {
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

            setChatRooms(userData.data.getUser.chatRoomUser.items);
            //console.log(chatRooms.map(i => i.chatRoomID))
            //setCRUID(userData.data.getChatRoom.chatRoomUsers.items.find((cru) => cru.userID === userInfo.attributes.sub).id)
            //console.log(cruid)
            //const chatRoom = (userData.data.getUser.chatRoomUser.items.map((items) => items.chatRoom))
            //const desiredMessages = (chatRoom.map((chatRoom) => chatRoom.messages.items.map((i) => i.createdAt > "2021-10-29T20:59:09.625Z"))) //logs only the messages for each respective chatRoom item.
            //const boolean = (desiredMessages.filter(Boolean))
            //console.log(boolean)
            //dear edison, we're passing the entire chatRoom data to the chatlist item. Then we're filtering that data in the component to find the number of unread messages to display for each respective chatRoom
            //console.log(userData.data.getUser.chatRoomUser.items)
            setRole(userData.data.getUser.role);
            setUserID(userData.data.getUser.id);
            //setLoading(false);
            setRefreshing(false);


        } catch (e) {
            console.log(e);
            return
        }
    }    
    useEffect(() => {
        fetchChatRooms();
        //console.log(chatRooms.map(i => i.chatRoomID))
        // return () => {
        //   setChatRooms([])
        // }
      }, [userID]) // *********************************************** I deleted userID from the dependency array for the unknown error!

    const listOfChatRooms = (chatRooms.map(i => i.chatRoomID))
    useEffect(() => {
        const subscription = API.graphql(
          graphqlOperation(onUpdateChatRoom)
        ).subscribe({
          next: (data) => {
            const updatedChatRoom = data.value.data.onUpdateChatRoom.id;
            const checksListIfIDExists = (listOfChatRooms.includes(updatedChatRoom))
            if (checksListIfIDExists) {
              fetchChatRooms()
            } else {
              //console.log("This room does not exist for this user")
              return;
            }
    
          } // doesn't work because it gives us an empty array of chatrooms when the user logs in. So weird; chatrooms are not set in this screen, but does on the list items.... However, when we refresh this code, it works, but we must manually refresh this code screen.
        });
        return () => subscription.unsubscribe();
    }, [chatRooms]);

    useEffect(() => {
        const subscription = API.graphql(
          graphqlOperation(onCreateChatRoomUser)
        ).subscribe({
          next: (data) => {
            const newUserID = data.value.data.onCreateChatRoomUser.user.id
            
            if (newUserID === userID) {
              fetchChatRooms()
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
        graphqlOperation(onCreateConversationUser)
      ).subscribe({
        next: (data) => {
          const newUserID = data.value.data.onCreateConversationUser.user.id
          
          if (newUserID === userID) {
            fetchChatRooms();
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
          graphqlOperation(onDeleteChatRoomUser)
        ).subscribe({
          next: (data) => {
            const deletedUserID = data.value.data.onDeleteChatRoomUser.user.id
              if (deletedUserID === userID) {
                fetchChatRooms()
              } else {
                console.log("This room does not exist for this user")
                return;
              }          
          }
        });
        return () => subscription.unsubscribe();
    }, [userID]);

    useEffect(() => {
      const subscription = API.graphql(
        graphqlOperation(onUpdateChatRoomUser)
      ).subscribe({
        next: (data) => {
          const updatedUserID = data.value.data.onUpdateChatRoomUser.user.id
            if (updatedUserID === userID) {
              fetchChatRooms()
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
        graphqlOperation(onUpdateConversation)
      ).subscribe({
        next: (data) => {
          const updatedConversation = data.value.data.onUpdateConversation.chatRoomID;
          const checksListIfIDExists = (listOfChatRooms.includes(updatedConversation))
          if (checksListIfIDExists) {
            fetchChatRooms()
          } else {
            //console.log("This room does not exist for this user")
            return;
          }
  
        } // doesn't work because it gives us an empty array of chatrooms when the user logs in. So weird; chatrooms are not set in this screen, but does on the list items.... However, when we refresh this code, it works, but we must manually refresh this code screen.
      });
      return () => subscription.unsubscribe();
  }, [chatRooms]);

    useEffect(() => {
      const subscription = API.graphql(
        graphqlOperation(onUpdateConversationUser)
      ).subscribe({
        next: (data) => {
          const updatedUserID = data.value.data.onUpdateConversationUser.user.id
            if (updatedUserID === userID) {
              fetchChatRooms()
            } else {
              //console.log("This room does not exist for this user")
              return;
            }  
        }
      });
  
      return () => subscription.unsubscribe();
    }, [userID]);

    useEffect(() => {
      const gestureHandler = navigation.addListener('focus', fetchChatRooms); 
      return () => {
        gestureHandler;
      };
    }, [navigation]); // not very optimal because it fetches the function every time you focus on this screen. We're only doing this because this is the only way to update the screen after you choose a role. Maybe remove all subscription functions and use this instead to refecth the data?

    // useEffect(() => {
    //   const subscription = API.graphql(
    //     graphqlOperation(onUpdateUser)
    //   ).subscribe({
    //     next: (data) => {
    //       const updatedUserID = data.value.data.onUpdateUser.id
    //         if (updatedUserID === userID) {
    //           fetchChatRooms()
    //         } else {
    //           //console.log("This room does not exist for this user")
    //           return;
    //         }  
    //     }
    //   });
  
    //   return () => subscription.unsubscribe();
    // }, [userID]);

    useEffect(() => {
      const subscription = API.graphql(
        graphqlOperation(onDeleteAnnouncement)
      ).subscribe({
        next: (data) => {
          const deletedAnnouncement = data.value.data.onDeleteAnnouncement.chatRoomID;
          const checksListIfIDExists = (listOfChatRooms.includes(deletedAnnouncement))
            if (checksListIfIDExists) {
              fetchChatRooms()
            } else {
              //console.log("This room does not exist for this user")
              return;
            }
        }
      });

      return () => subscription.unsubscribe();
    }, [chatRooms]);

    useEffect(() => {
      const subscription = API.graphql(
        graphqlOperation(onUpdateAnnouncement)
      ).subscribe({
        next: (data) => {
          const updatedAnnouncement = data.value.data.onUpdateAnnouncement.chatRoomID;
          const checksListIfIDExists = (listOfChatRooms.includes(updatedAnnouncement))
          if (checksListIfIDExists) {
            fetchChatRooms()
          } else {
            //console.log("This room does not exist for this user")
            return;
          }    }
      });

      return () => subscription.unsubscribe();
    }, [chatRooms]);

    const navigateToSettings = () => {
        navigation.navigate('Settings', {role: role, userID: userID});
    };

    useLayoutEffect (() => {
        navigation.setOptions({
            title: "My Classes",
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
       
//     const deleteChatRoom = async (chatRoom) => {
//       try {
//           const chatRoomid = {
//               id: chatRoom.id,
//           };
            
//           await API.graphql({ 
//               query: mutations.deleteChatRoom, 
//               variables: {input: chatRoomid}
//           });

//       } catch (e) {
//           Alert.alert('Oops! An error has occurred')
//           console.log(e);
//           return;
//       }
//       setChatRooms(chatRooms.filter((c) => c.id !== chatRoom.id))
//       console.log('chatRoom was successfully deleted')
//       //doesn't work; maybe delete all chatRoomUsers instead of chatRoom?
//       //if so, find a way that deleteChatRoomUsers() will accept arrays of ids.
//       //goodNow? is broken, don't use him anymore
//   }

//   const confirmDelete = (chatRoom) => {
//     Alert.alert(
//         `Delete "${chatRoom.name}"?`,
//         `Are you sure you want to delete ${chatRoom.name}`,
//         [
//             {
//                 text: "Delete",
//                 onPress: () => deleteChatRoom(chatRoom),
//                 style: "destructive"
//             },
//             {
//                 text: "Cancel"
//             }
//         ]
//     )
// }

    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            {/* {refreshing ? <ActivityIndicator /> : null} */}
            {/* {loading ? 
                <View style={{alignItems: "center", justifyContent: "center"}}>
                    <ActivityIndicator size="large" color="#00BFFF" />
                 </View>
                 :
                <FlatList
                    style={{ width: '100%' }}
                    ItemSeparatorComponent={renderSeparator}
                    data={chatRooms}
                    renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} role={role} userID={userID} chatRooms={chatRooms}/> } //onLongPress={() => confirmDelete(item.chatRoom)}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                      <RefreshControl refreshing={refreshing} onRefresh={fetchChatRooms} tintColor="#00BFFF" />
                    }
                />
            } */}
            <FlatList
                    style={{ width: '100%' }}
                    ItemSeparatorComponent={renderSeparator}
                    data={chatRooms}
                    renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} role={role} userID={userID} chatRooms={chatRooms}/> } //onLongPress={() => confirmDelete(item.chatRoom)}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                      <RefreshControl refreshing={refreshing} onRefresh={fetchChatRooms} tintColor="#7DE1FF" />
                    }
            />
            {/* { component() } */}
             {role === 'none' ? <ChooseYourRoleButton/> : <NewMessageButton role={role}/>}
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

export default ChatsScreen