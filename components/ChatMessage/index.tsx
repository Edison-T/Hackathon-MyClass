import React from 'react';
import { Fragment } from 'react';
import { TouchableOpacity, Pressable, Text, View, Linking } from 'react-native';
import Lightbox from 'react-native-lightbox';
import { useActionSheet } from "@expo/react-native-action-sheet";
import EmojiSelector from "react-native-emoji-selector";
import Hyperlink from 'react-native-hyperlink'
import * as Clipboard from 'expo-clipboard';

import { Message } from '../../types';
import moment from 'moment';
import styles from './styles'
import {S3Image} from 'aws-amplify-react-native';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { useWindowDimensions } from 'react-native';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMessage } from '../../src/graphql/queries';
import MessageReply from '../MessageReply';

export type ChatMessageProps = {
    message: Message;
    myId: String;
    myName: String;
    setAsMessageReply: () => void
}


const ChatMessage = (props: ChatMessageProps) => {
    const [soundURI, setSoundURI] = useState<any>(null);
    const [repliedTo, setRepliedTo] = useState<any>(null);
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

    const { message, myId, setAsMessageReply , myName} = props;
    const { showActionSheetWithOptions } = useActionSheet();

    const MyMessage = () => {
        return message.user.id === myId;
    }

    const taggedDetected = () => {
        const subString = /@[a-zA-Z0-9]/g
        return message.content.match(subString)
    }

    useEffect(() => {
        if(message.audio) {
            Storage.get(message.audio).then(setSoundURI);
        }
    }, [message])

    useEffect(() => {
        if (message?.replyToMessageID) {
            const fetchReplyToMessage = async () => {
                try {
                    const userData = await API.graphql(
                        graphqlOperation(
                            getMessage, {
                                id: message.replyToMessageID,
                            }
                        )
                    )
                    setRepliedTo(userData.data.getMessage)
                } catch (e) {
                    console.log(e);
                }
            } 
            fetchReplyToMessage()
        }
    }, [message])

    const onActionPress = (index) => {
        if (index === 0) {
          Clipboard.setString(message.content)
        } else if (index === 1) {
            setAsMessageReply();
        }
      };
    
      const openActionMenu = () => {
        const options = ["Copy Text", "Reply", "Cancel"]; //add "React"
        const cancelButtonIndex = 2;
        
        showActionSheetWithOptions(
          {
            options,
            cancelButtonIndex,
            destructiveButtonIndex: 2,
            
          },
          onActionPress
        );
      };


    return (
        <View style={[styles.container, { height: isEmojiPickerOpen ? "50%" : "auto" }]}>
            <TouchableOpacity activeOpacity={0.7} onLongPress={openActionMenu} style={
                [styles.messageBox, {
                    backgroundColor: 'white',
                    alignSelf: "flex-start",
                    width: "100%"
                },  
                ]}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <S3Image imgKey={message.user.imageUri} style={{ width: 45,  height: 45, aspectRatio: 1, borderRadius: 50, }}/>
                    <Text style={styles.name}>{message.user.name}</Text>
                    <Text style={[{ color: "grey", marginLeft: 7.5, fontSize: 12.5 }]}>{moment(message.createdAt).format("h:mm A")}</Text>
                </View>
                
                
                {repliedTo && (<View><MessageReply message={repliedTo} /></View>)}
          
                {message.image && (
                    <Lightbox 
                        underlayColor='transparent' 
                        onLongPress={openActionMenu} 
                        activeProps={{ 
                            aspectRatio: message.imageWidth / message.imageHeight, 
                            resizeMode: "stretch",
                        }}
                    >
                        <View style={{
                            marginBottom: message.content ? 10 : 0, 
                            marginTop: message.content ? 10 : 0,
                            }}
                        >
                            <S3Image 
                                imgKey={message.image} 
                                style={{ 
                                    flex: 1, 
                                    aspectRatio: message.imageWidth / message.imageHeight, 
                                    borderRadius: 5, 
                                    margin: 10, 
                                    resizeMode: "stretch", 
                                    alignSelf: "center"
                                }}
                            />
                        </View>
                    </Lightbox>
                )} 

                {soundURI && (<AudioPlayer soundURI={soundURI} />)}

                {!!message.content && (
                    <Hyperlink linkDefault={true} linkStyle={{ color: '#00BFFF', textDecorationLine: "underline" }} >
                        {<Text style={[styles.message, { color: "black"}]}>
                            {message.content.split(" ").map((word, i) =>
                            word.includes(`@${myName}`) ? (
                                <Text style={{ color: "#FF3131", fontWeight: "700" }} key={i}>
                                    {i === 0 ? '' : " "}{word} 
                                </Text>
                            ) : (
                                <Fragment key={i}>
                                    {i === 0 ? "" : " "}
                                    {word}
                                </Fragment>
                            )
                            )}
                        </Text>}
                    </Hyperlink>
                )}
            </TouchableOpacity>
        
        </View>
    )
}

export default ChatMessage;