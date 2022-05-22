import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const CreateAnnouncementButton = (props) => {
    const navigation = useNavigation();
    const {classID, CRUID} = props;

    return (
        <View style={{alignItems: "center"}}>
        <TouchableOpacity
            style={{position: "absolute", bottom: 50}}
            onPress={() => {navigation.navigate("Create Announcements", {classID: classID, CRUID: CRUID})}}
            activeOpacity={0.7}>
            <View style={styles.buttons}>
                <MaterialCommunityIcons 
                    name="pencil"
                    size={30}
                    color = 'white'
                    style={{marginRight: 10,}}
                />
                <Text style={[styles.text,{color: "#fff", fontWeight: "600", fontSize: 18 }]}>
                    Announcement
                </Text>
            </View>
        </TouchableOpacity>
        </View>
        
    )    
}

export default CreateAnnouncementButton