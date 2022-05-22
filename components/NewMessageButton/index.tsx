import React, {useEffect, useLayoutEffect} from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as mutations from '../../src/graphql/mutations';



import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser } from '../../src/graphql/queries';

const NewMessageButton = (props) => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const {role} = props;

    const navigation = useNavigation();

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: false,
          shouldPlaySound: false,
          shouldSetBadge: false,
        }),
      });
      //according to docs, this is responsible for foreground notifications

    async function registerForPushNotificationsAsync() {
        let token;
        if (Constants.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          //console.log(token);
        } else {
          console.log('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
        return token;
      }
  
      useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token) );
      }, []);

      const setExpoNotificationToken = async () => {
        try {
          const userInfo = await Auth.currentAuthenticatedUser();
          const userDetails = {
              id: userInfo.attributes.sub,
              expoPushToken: expoPushToken
          };
          await API.graphql({ query: mutations.updateUser, variables: {input: userDetails}})
          console.log(`Updated ${role} token with ${expoPushToken}`)
        }
        catch (e) {
          console.log(e)
        }
      } 


    const onPress = () => {
            if (role == "teacher") {
                 navigation.navigate('Create Classes');
             } else {
                 navigation.navigate('Join Classes');
             };
            
            setExpoNotificationToken();
           };

           
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
                <MaterialCommunityIcons
                    name="google-classroom" 
                    size={37}
                    color = 'white'
                />
            </TouchableOpacity>
        </View>
        
    )
}

export default NewMessageButton;