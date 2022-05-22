import "react-native-gesture-handler"
import { StyleSheet, Text, View, ActivityIndicator, LogBox } from "react-native";
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ChatsScreen from './Screens/ChatsScreen';
import SettingsScreen from "./Screens/SettingsScreen";
import ChatRoomScreen from './Screens/ChatRoomScreen';
import AssignUserScreen from "./Screens/AssignUserScreen"
import StudentContactsScreen from "./Screens/StudentContactsScreen";
import TeacherContactsScreen from "./Screens/TeacherContactsScreen";
import ChatRoomSettingsScreen from "./Screens/ChatRoomSettingsScreen";

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';
import { withAuthenticator } from 'aws-amplify-react-native'
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import StudentChatRoomSettingsScreen from "./Screens/StudentChatRoomSettingsScreen";
import TeacherAnnouncementScreen from "./Screens/TeacherAnnouncementScreen";
import CreateAnnouncementScreen from "./Screens/CreateAnnouncementScreen";
import UpdateAnnouncementScreen from "./Screens/UpdateAnnouncementScreen";
import PrivateRoomHomeScreen from "./Screens/PrivateRoomHomeScreen";
import NewPrivateForTeachers from "./Screens/NewPrivateForTeachers";
import NewPrivateForStudents from "./Screens/NewPrivateForStudents";
import PrivateRoomScreen from "./Screens/PrivateRoomScreen";
import ConversationRoom from "./Screens/ConversationRoomScreen";
import config from './aws-exports'
Amplify.configure(config)


const randomImages = [
  "avatardefault_92824.png"
]

LogBox.ignoreAllLogs();

const AppStack = createStackNavigator();
const PrivateAppStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#00BFFF" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

const AppNavigator = props => {
  return (
    <AppStack.Navigator screenOptions={globalScreenOptions} >  
      <AppStack.Screen name='Chats Screen' component={ChatsScreen} />
      <AppStack.Screen name='Settings' component={SettingsScreen} />
      <AppStack.Screen name='Chat Room' component={ChatRoomScreen} options={({ route }) => ({ title: route.params.name })} />
      <AppStack.Screen name='Class Settings' component={ChatRoomSettingsScreen}/>
      <AppStack.Screen name='Classroom Settings' component={StudentChatRoomSettingsScreen} />
      <AppStack.Screen name='Choose Your Role' component={AssignUserScreen} />
      <AppStack.Screen name='Join Classes' component={StudentContactsScreen} />
      <AppStack.Screen name='Create Classes' component={TeacherContactsScreen} />
      <AppStack.Screen name='Announcements' component={TeacherAnnouncementScreen} />
      <AppStack.Screen name='Create Announcements' component={CreateAnnouncementScreen} />
      <AppStack.Screen name='Update Announcements' component={UpdateAnnouncementScreen} />
    </AppStack.Navigator>
  );
};


const PrivateAppNavigator = props => {
  return (
    <PrivateAppStack.Navigator screenOptions={globalScreenOptions} >
      <PrivateAppStack.Screen name="Private Chat Home Screen" component={PrivateRoomHomeScreen} />
      <PrivateAppStack.Screen name="Private Chat Room" component={PrivateRoomScreen} options={({route}) => ({title: route.params.name})} />

    </PrivateAppStack.Navigator>
  )
}


  function App() {
      const getRandomImage = () => {
        return randomImages[Math.floor(Math.random() * randomImages.length)]
      }
    
      useEffect ( () => {
        const fetchUser = async () => {
          //get authenticated user from auth
          const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
    
          if (userInfo) {
          // get the user from backend with user SUB from auth; checks if there is an user
          const userData = await API.graphql
            (graphqlOperation(
              getUser,
              { id: userInfo.attributes.sub }
            )
          )
    
          if (userData.data.getUser) {
            console.log("User is registered in my database");
            return;
          }
    
          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageUri: getRandomImage(),
            status: 'Online',
            role: 'none',
            expoPushToken: '',
          }
    
          await API.graphql( // using newUser, it makes a new user to the API
            graphqlOperation(
              createUser,
              {input: newUser}
            )
          )
          // if there is no user in DB with the id, then create one
          }
        }
        fetchUser();
      }, []); // this fetches user information from the backend

      return (
        <ActionSheetProvider>
        <NavigationContainer>
            <Tab.Navigator
              tabBarPosition="bottom"
              tabBarOptions={{
                inactiveTintColor: "grey",
                showIcon: "true",
                style: { backgroundColor: "white", marginBottom: 18 },
                activeTintColor: "#00BFFF",
              }}
            >
              <Tab.Screen 
                name="Chats Screen" 
                component={AppNavigator} 
                options={{
                  tabBarLabel: "Classes",
                  tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="google-classroom" color={color} size={24} />
                  )
                }}
              />

              <Tab.Screen 
                name="Private Chat Home Screen" 
                component={PrivateAppNavigator} 
                options={{
                  tabBarLabel: "Private",
                  tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="account" color={color} size={24} />
                  )
                }}
              />
            </Tab.Navigator>
        </NavigationContainer>
        </ActionSheetProvider>
      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default withAuthenticator(App, {
  signUpConfig: {
    hiddenDefaults: ['phone_number']
  }
})
