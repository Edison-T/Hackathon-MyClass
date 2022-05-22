import React from 'react';
import { Pressable, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Announcement, Message } from '../../types';
import moment from 'moment';
import styles from './styles'
import {S3Image} from 'aws-amplify-react-native';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { useWindowDimensions } from 'react-native';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMessage } from '../../src/graphql/queries';
import Hyperlink from 'react-native-hyperlink'
import { useNavigation } from '@react-navigation/native';

export type AnnouncementComponentProps = {
    announcement: Announcement;
    role: any
    confirmAnnouncementDeletion: () => void
}


const AnnouncementComponent = (props: AnnouncementComponentProps) => {
    const [editAndDeleteBox, setEditAndDeleteBox] = useState(false)

    const { announcement, role, confirmAnnouncementDeletion} = props;
    const navigation = useNavigation();

    const navigateToEdit = () => {
        navigation.navigate ('Update Announcements', {
            editContent: announcement.content,
            editTitle: announcement.title,
            id: announcement.id,
            dueDate: announcement.dueDate,
        })
    }

    return (
        <View style={styles.container}>
            <View style={
                [styles.messageBox,
                ]}>

                <View style={{flexDirection: "row", alignItems: "center",}}>
                    <S3Image imgKey={announcement.user.imageUri} style={{ width: 35,  height: 35, aspectRatio: 1, borderRadius: 50, marginRight: 10 }}/>
                    <Text style={styles.name}>{announcement.user.name}</Text>
                    <Text style={{ marginLeft: "auto", color: 'grey', }}>{moment(announcement.updatedAt).format("MM/DD/YY @ h:mm A")}</Text>
                    {role === 'teacher' ? 
                        <MaterialCommunityIcons name="dots-vertical" size={30} color="grey" onPress={() => {setEditAndDeleteBox((currentValue) => !currentValue)}} />
                        : null
                    }
                </View>
                
                {announcement.title ? <Text style={styles.title}>{announcement.title}:</Text> : null}
                {announcement.dueDate ? <Text style={[styles.title, {color: "red", marginTop: 5}]}>Due {moment(announcement.dueDate).format("dddd, MM/DD")}</Text>: null}

                {!!announcement.content && (<Hyperlink linkDefault={true} linkStyle={{ color: '#00BFFF', textDecorationLine: "underline" }} ><Text style={[styles.message, { color: 'black' }]}>{announcement.content}</Text></Hyperlink>)}

                {editAndDeleteBox ? <View style={styles.editAndDeleteBox}>
                    <TouchableOpacity activeOpacity={0.5} onPress={navigateToEdit} >
                        <Text style={[styles.editAndDeleteText, {color: "#00BFFF"}]}>Edit</Text>
                    </TouchableOpacity>
                    <View style={styles.renderSeparator}/>
                    <TouchableOpacity activeOpacity={0.5} onPress={confirmAnnouncementDeletion} >
                        <Text style={[styles.editAndDeleteText, {color: "red"}]}>Delete</Text>
                    </TouchableOpacity>
                </View>:null
                }

            </View>
        </View>
    )
}

export default AnnouncementComponent;