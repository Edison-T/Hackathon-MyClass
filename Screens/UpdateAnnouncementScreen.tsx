import React, {useLayoutEffect} from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Button, ScrollView, FlatList, Alert, Platform, Image, ActivityIndicator } from "react-native";
import {API, graphqlOperation, Auth, Storage } from "aws-amplify";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DateTimePicker from '@react-native-community/datetimepicker';
import { getChatRoom, getGroupRoom } from "./queries";
import uuid from 'react-native-uuid';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { useEffect } from "react";
import ChatRoomListUsers from "../components/ChatRoomListUsers";
import { listChatRoomUsers } from "../src/graphql/queries";
import { TextInput } from "react-native-gesture-handler";
import { onUpdateChatRoom, onUpdateGroupRoom } from "../src/graphql/subscriptions";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { Ionicons } from '@expo/vector-icons';
import * as mutations from '../src/graphql/mutations';


const UpdateAnnouncementScreen = ({route}, props) => {
    const {classID, editContent, editTitle, id, dueDate} = route.params

    const [title, setTitle] = useState(editTitle);
    const [message, setMessage] = useState(editContent);
    const [date, setDate] = useState(dueDate);
    const [radioButton1, setRadioButton1] = useState(false);
    const [radioButton2, setRadioButton2] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [image, setImage] = useState<string | null>(null);

    const navigation = useNavigation();

    useLayoutEffect (() => {
        navigation.setOptions({
              headerLeft: () => (
                <View>
                  <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Announcements', {
                  })}>
                  <Ionicons
                        name="chevron-back-outline" 
                        size={35}
                        color = 'white'
                    />
                </TouchableOpacity>
                </View>
              )
        }), [navigation]});

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const updateAnnouncement = async () => {
        await API.graphql(
            graphqlOperation(
                mutations.updateAnnouncement, {
                    input: {
                        id: id,
                        title: title,
                        content: message,
                        dueDate: date
                    }
                }
            )
        )
        navigation.navigate('Announcements')
    }        

    return (
        <ScrollView style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.titleTextInput}
                        placeholder="Title" 
                        value={title} 
                        onChangeText={(text) => setTitle(text)}
                        clearButtonMode="always"
                        />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.messageTextInput}
                        placeholder= "Enter message..." 
                        value={message} 
                        multiline
                        onChangeText={(text) => setMessage(text)}
                        clearButtonMode="while-editing"
                    />
                </View>        
                
                <View style={{flexDirection: "row", alignSelf: "center", marginBottom: 50}}>
                    <Text style={{alignSelf: "center", marginRight: 50, fontSize: 20, fontWeight: "600"}}>Set a due date?</Text>

                    <TouchableOpacity style={{flexDirection: "row", marginRight: 30}} onPress={() => {setDate(new Date())}}>
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
                            date !== null ?
                            <View style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#00BDFF',
                            }}/>
                            : null
                        }
                        </View>
                        <Text style={{ alignSelf: "center", marginLeft: 5, fontWeight: "500", fontSize: 17 }}>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {setDate(null)}}>
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
                            date === null ?
                            <View style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#00BDFF',
                            }}/>
                            : null
                        }
                        </View>
                        <Text style={{ alignSelf: "center", marginLeft: 5, fontWeight: "500", fontSize: 17 }}>No</Text>
                    </TouchableOpacity>
                </View>

                { date !== null ?
                <View style={{ marginBottom: 60 }}>
                    <DateTimePicker
                        style={{borderColor: "black", borderWidth: 1.5, borderRadius: 10, }}
                        testID="dateTimePicker"
                        value={new Date(date)}
                        mode="date"
                        display="inline"
                        onChange={onChange}
                    />
                </View>
                : null
                }            

                <TouchableOpacity
                  style={styles.codeDescriptionContainer}
                  onPress={updateAnnouncement}
                  activeOpacity={0.5}>
                  <View style={styles.buttons}>
                      <MaterialCommunityIcons 
                        name="send"
                        size={30}
                        color = 'white'
                        style={{marginRight: 10,}}
                      />
                      <Text style={[styles.text,{color: "#fff", fontWeight: "600", fontSize: 18 }]}>
                        Announcement
                      </Text>
                  </View>
                </TouchableOpacity>
        </ScrollView>
    )
}

//******The ClassRoom title name does not update; try reverse route params to
// update the name in real time!! */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    codeDescriptionContainer: {
        alignItems: "center",
        marginBottom: 60,
    },
    bigText: {
      fontFamily: "Avenir Next",
      color: "#1D2029",
      fontSize: 40,
      fontWeight: '700',
      textAlign: 'center',
    },
    smallText: {
        fontFamily: "Avenir Next",
        color: "#ABB4BD",
        fontSize: 20,
        textAlign: 'center',
    },
    buttons: {
      backgroundColor: "#00BFFF",
      fontSize: 16,
      borderRadius: 8,
      paddingVertical: 13,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "rgba(20, 40, 100, 0.20)",
      shadowOffset: {width:0, height:9},
      shadowOpacity: 1,
      shadowRadius: 20,
      width: 275,
      flexDirection: "row"
    },
    text: {
      fontFamily: "Avenir Next",
      color: "#1D2029"
    },
    inputContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
    },
    titleTextInput: {
        alignItems: 'center',
        textAlign: 'center',
        height: 70,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        fontSize: 25,
        fontFamily: 'Avenir Next',
        width: 320,
        backgroundColor: "white",
        marginBottom: 10
    },
    messageTextInput: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 20,
      fontSize: 25,
      fontFamily: 'Avenir Next',
      width: 320,
      flex: 1,
      height: 340,
      padding: 5,
      paddingLeft: 10,
      paddingTop: 10,
      backgroundColor: "white",
      marginBottom: 50
    },
    TextComponentStyle: {
        borderRadius: 17,
        width: 250,
        borderWidth: 4,
        borderColor: 'black',
        backgroundColor : "transparent",
        padding : 12,
        textAlign: 'center',
        margin: 10,
        fontFamily: "Avenir Next",
        color: "#1D2029",
        fontSize: 40,
        fontWeight: '700',
    },
      
})

export default UpdateAnnouncementScreen;