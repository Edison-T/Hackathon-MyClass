import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Image } from 'react-native-elements';
import { User } from '../types';

import * as mutations from '../src/graphql/mutations';
import { API, graphqlOperation, Auth} from 'aws-amplify';
import { useNavigation } from '@react-navigation/core';
import { NavigationHelpersContext } from '@react-navigation/native';

const AssignUserScreen = () => {

    const navigation = useNavigation();

    const setTeacher = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        const userDetails = {
            id: userInfo.attributes.sub,
            role: "teacher"
        };
        await API.graphql({ query: mutations.updateUser, variables: {input: userDetails}})
        navigation.navigate('Chats Screen')
    };

    const setStudent = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        const userDetails = {
            id: userInfo.attributes.sub,
            role: "student"
        };
        await API.graphql({ query: mutations.updateUser, variables: {input: userDetails}})
        navigation.navigate('Chats Screen')
    };


    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light"/>

            <Text style={styles.text}>
                I am a . . .
            </Text>

            <TouchableOpacity
                onPress={setTeacher}
                activeOpacity={0.5}
            >
                <Image
                 source={require('../assets/teacher1.png')}
                 style={styles.avatars}
                />
                <Text  style={styles.avatarText}>Teacher</Text>
            </TouchableOpacity>

            <View style={{  height: 40 }}/>

            <TouchableOpacity
                onPress={setStudent}
                activeOpacity={0.5}>
                <Image
                 source={require('../assets/student1.png')}
                 style={styles.avatars}
                />
                <Text  style={styles.avatarText}>Student</Text>
            </TouchableOpacity>
         </KeyboardAvoidingView>
    );
}

export default AssignUserScreen;
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: "Avenir Next",
        color: "#1D2029",
        fontWeight: "600",
        fontSize: 35, 
        marginBottom: 40,
      },
    avatars: {
        width: 200,
        height: 200,
        marginBottom: 5,
    },
    avatarText: {
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "Avenir Next",
        color: "#1D2029",
        textAlign: 'center',
    },
});