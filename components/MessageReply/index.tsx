import React from 'react';
import { Fragment } from 'react';
import { Pressable, Text, View } from 'react-native';
import Lightbox from 'react-native-lightbox';

import { Message } from '../../types';
import moment from 'moment';
import styles from './styles'
import {S3Image} from 'aws-amplify-react-native';
import Hyperlink from 'react-native-hyperlink'
import { API, graphqlOperation, Storage } from "aws-amplify";
import { useWindowDimensions } from 'react-native';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMessage } from '../../src/graphql/queries';

export type ChatMessageProps = {
    message: Message;
    myId: String;
    myName: String;
    setAsMessageReply: () => void
}


const MessageReply = (props: ChatMessageProps) => {
    const [soundURI, setSoundURI] = useState<any>(null);

    const { message, myId, myName } = props;
    const { width } = useWindowDimensions();

    const MyMessage = () => {
        return message.user.id === myId;
    }

    const MyName = () => {
        return message.user.name === myName;
    }

    useEffect(() => {
        if(message.audio) {
            Storage.get(message.audio).then(setSoundURI);
        }
    }, [message])

    return (
        <View>
        <View style={styles.container}>
            <View style={
                [styles.messageBox, {
                    backgroundColor: 'white',
                    shadowColor: "rgba(20, 40, 100, 0.20)",
                    shadowOffset: {width:1, height:4},
                    shadowOpacity: 1,
                    shadowRadius: 7,
                    alignSelf: 'center',
                },  { width: "100%" }
                ]}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <S3Image imgKey={message.user.imageUri} style={{ width: 35,  height: 35, aspectRatio: 1, borderRadius: 50, }}/>
                    <Text style={styles.name}>{message.user.name}</Text>
                    {/* <Text style={[{ color: "grey", marginLeft: 7.5, fontSize: 10.5 }]}>{moment(message.createdAt).format("h:mm A")}</Text> */}
                </View>                
                {message.image && (<Lightbox underlayColor='white' activeProps={{ aspectRatio: message.imageWidth / message.imageHeight, resizeMode: "stretch", }} ><View style={{marginBottom: message.content ? 10 : 0, marginTop: message.content ? 10 : 0,}}><S3Image imgKey={message.image} style={{ aspectRatio: message.imageWidth / message.imageHeight, borderRadius: 5, margin: 10, resizeMode: "stretch", alignSelf: "center"}} /></View></Lightbox>)} 
                {soundURI && (<AudioPlayer soundURI={soundURI} />)}
                {!!message.content && (
                    <Hyperlink linkDefault={true} linkStyle={{ color: '#00BFFF', textDecorationLine: "underline" }} >
                       
                        {<Text style={[styles.message, { color: 'black'}]}>
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
            </View>
        </View>
        </View>
    )
}

export default MessageReply;