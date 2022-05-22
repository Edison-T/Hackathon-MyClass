import React, {useState, useEffect} from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Audio, AVPlaybackStatus } from "expo-av";



const AudioPlayer = ({soundURI}) => {
    const [paused, setPaused] = useState(true);
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [audioProgress, setAudioProgress] = useState(0);
    const [audioDuration, setAudioDuration] = useState(0);

    useEffect(() => {
        loadSound();
        () => {
            //unload sound
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [soundURI]);

    const loadSound = async () => {
        if(!soundURI) {
            return;
        }

        const { sound } = await Audio.Sound.createAsync(
            { uri: soundURI }, 
            {}, 
            onPlayBackStatusUpdate
        );
        setSound(sound);
    }
 
    const onPlayBackStatusUpdate = (status: AVPlaybackStatus) => {
        if(!status.isLoaded) {
            return;
        }
        setAudioProgress(status.positionMillis/(status.durationMillis || 1));
        setPaused(!status.isPlaying);
        setAudioDuration(status.durationMillis || 0);
    };
    const playPauseSound = async () => {
        if(!sound) {
            return;
        }
        if(paused) {
            await sound.playFromPositionAsync(0);
        } else {
            await sound.pauseAsync();
        }
    }

    const getDuration = () => {
        const minutes = Math.floor(audioDuration / (60 * 1000));
        const seconds = Math.floor((audioDuration % (60 * 1000)) / 1000);
        
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    return (
        <View style={styles.sendAudioContainer}>
            <Pressable onPress={playPauseSound}>
                <Feather name={paused ? "play" : "pause"} size={24} color="grey"/>
            </Pressable>
                    
            <View style={styles.audioProgressBG}>
                <View style={[styles.audioProgressFG, { left:`${audioProgress * 100}%`}]}/>
            </View>

            <Text>{getDuration()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sendAudioContainer: {
        padding: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: "stretch",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 10,
        backgroundColor: "white",
    },
    audioProgressBG: {
        height: 3,
        flex: 1,
        backgroundColor: 'lightgray',
        borderRadius: 5,
        margin: 10,
    },
    audioProgressFG: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#00BFFF',

        position: 'absolute',
        top: -3,
    }
})

export default AudioPlayer;