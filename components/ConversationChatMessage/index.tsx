import React from 'react';
import { Fragment } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import Lightbox from 'react-native-lightbox';
import Hyperlink from 'react-native-hyperlink'
import { Message } from '../../types';
import moment from 'moment';
import styles from './styles'
import {S3Image} from 'aws-amplify-react-native';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { useWindowDimensions } from 'react-native';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { useState } from 'react';
import { useEffect } from 'react';
import { getConversationMessage, getGroupRoomMessage, getMessage } from '../../src/graphql/queries';
import MessageReply from '../MessageReply';
import { useActionSheet } from "@expo/react-native-action-sheet";
import EmojiSelector from "react-native-emoji-selector";
import * as Clipboard from 'expo-clipboard';

export type ConversationChatMessageProps = {
    message: Message;
    myId: String;
    myName: String;
    setAsMessageReply: () => void
}


const ConversationChatMessage = (props: ConversationChatMessageProps) => {
    const [soundURI, setSoundURI] = useState<any>(null);
    const [repliedTo, setRepliedTo] = useState<any>(null);
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);


    const { message, myId, setAsMessageReply, myName } = props;
    const { width } = useWindowDimensions();
    const { showActionSheetWithOptions } = useActionSheet();

    const MyMessage = () => {
        return message.user.id === myId;
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
                            getConversationMessage, {
                                id: message.replyToMessageID,
                            }
                        )
                    )
                    setRepliedTo(userData.data.getConversationMessage)
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
            //insert open emojis function here
        // } else if (index === 2) {
        //     setIsEmojiPickerOpen(true);
        // }
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
        <View style={styles.container}>
            <TouchableOpacity onLongPress={openActionMenu} activeOpacity={0.7} style={
                [styles.messageBox, {
                    backgroundColor: MyMessage() ? '#00BFFF' : 'white',
                    marginLeft: MyMessage() ? 60 : 20,
                    marginRight: MyMessage() ? 20 : 60,
                    alignSelf: MyMessage() ? 'flex-end' : 'flex-start',
                },  { width: soundURI || message.image ? "75%" : 'auto' }
                ]}>
                {!MyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                
                {repliedTo && (<View><Text style={{fontSize: 15, fontWeight: "500", marginLeft: 5, marginTop: 5, marginBottom: 5}}>Replied to:</Text><MessageReply message={repliedTo} /></View>)}
                {/* {repliedTo && (<Text>replied to: {repliedTo}</Text>)} */}
                {/* ^^^For only displaying text reply^^^ */}

                {message.image && (<Lightbox underlayColor='#00BFFF' onLongPress={openActionMenu} activeProps={{ aspectRatio: message.imageWidth / message.imageHeight, resizeMode: "stretch", }} ><View style={{marginBottom: message.content ? 10 : 0, marginTop: message.content ? 10 : 0,}}><S3Image imgKey={message.image} style={{ flex: 1, aspectRatio: message.imageWidth / message.imageHeight, borderRadius: 5, margin: 10, resizeMode: "stretch", alignSelf: "center"}} /></View></Lightbox>)} 
                {soundURI && (<AudioPlayer soundURI={soundURI} />)}
                {!!message.content && (
                    <Hyperlink linkDefault={true} linkStyle={{ color: MyMessage() ? 'white' : '#00BFFF', textDecorationLine: "underline" }} >
                        {/* <Text style={[styles.message, { color: MyMessage() ? 'white' : 'black'}]}>
                            {message.content}
                        </Text> */}
                        {<Text style={[styles.message, { color: MyMessage() ? 'white' : 'black'}]}>
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
                {/* {!MyMessage() && <Avatar rounded position="absolute" bottom={-17} left={-23} size={35} source={{uri: message.user.imageUri}}/>}
                {MyMessage() && <Avatar rounded position="absolute" bottom={-17} right={-23} size={35} source={{uri: message.user.imageUri}}/>} */}
                {!MyMessage() && <S3Image imgKey={message.user.imageUri} style={{ width: 35,  height: 35, aspectRatio: 1, borderRadius: 50, position: "absolute", bottom: -17, left: -23 }}/>}
                {MyMessage() && <S3Image imgKey={message.user.imageUri} style={{ width: 35,  height: 35, aspectRatio: 1, borderRadius: 50, position: "absolute", bottom: -17, right: -23}}/>}
            </TouchableOpacity>
            <View>
                <Text style={[styles.time, { color: MyMessage() ? '#969696' : 'grey', alignSelf: MyMessage() ? "flex-end" : "flex-start", left: MyMessage() ? -34 : 34, marginBottom: 5, top: -4 }]}>{moment(message.createdAt).format("h:mm A")}</Text>
            </View>
        </View>
    )
}

export default ConversationChatMessage;