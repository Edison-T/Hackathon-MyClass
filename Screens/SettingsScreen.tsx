import React, {useState, useEffect, useLayoutEffect} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Platform, Alert, Image, ActivityIndicator, FlatList, ScrollView } from "react-native";
import { API, graphqlOperation, Auth, Storage } from 'aws-amplify';
import {S3Image} from 'aws-amplify-react-native';

import { getUser } from "./queries";
import * as mutations from '../src/graphql/mutations';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import { onUpdateUser } from "../src/graphql/subscriptions";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const SettingsScreen = () => {

    const [imageUri, setImageUri] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [image, setImage] = useState('')

    const navigation = useNavigation();

    useLayoutEffect (() => {
        navigation.setOptions({
              headerLeft: () => (
                <View>
                  <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.goBack()}>
                  <Ionicons
                        name="chevron-back-outline" 
                        size={35}
                        color = 'white'
                    />
                </TouchableOpacity>
                </View>
              )
    }), [navigation]});
     
    async function getImageUri () {
             try {
                 const userInfo = await Auth.currentAuthenticatedUser();
                 const usersData = await API.graphql(
                     graphqlOperation(
                         getUser, {
                             id: userInfo.attributes.sub,
                             name: userInfo.attributes.sub,
                             imageUri: userInfo.attributes.sub,
                         }
                     )
                 )
                 setImageUri(usersData.data.getUser.imageUri);
                 setName(usersData.data.getUser.name);

             } catch (e) {
                 console.log(e);
             }
    }

    useEffect(() => {
            getImageUri();
    }, [])

    useEffect(() => {
        (async () => {
          if (Platform.OS !== "web") {
            const libraryResponse =
              await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (
              libraryResponse.status !== "granted"
            ) {
              alert("Sorry, we need camera roll permissions to make this work!");
            }
          }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };

    const updateImage = async () => {
        if(!image) {
            Alert.alert('You forgot to insert an image!', 'Click on your profile picture to access your photo library.')
            return;
        }
        const blob = await getBlob(image);
        const {key} = await Storage.put(`${uuid.v4()}.png`, blob);

        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const userDetails = {
                id: userInfo.attributes.sub,
                imageUri: key
        };
        await API.graphql({ query: mutations.updateUser, variables: {input: userDetails}})
        alert('Successfully updated profile picture!')
        } catch(e) {
            console.log(e)
        }
        setImage(image)
    };

    const getBlob = async (uri: string) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        return blob;
    }

    useEffect(() => {
        const subscription = API.graphql(
          graphqlOperation(onUpdateUser)
        ).subscribe({
          next: (data) => {
            const newMessage = data.value.data.onUpdateChatRoom;
            getImageUri();
          }
        });
        return () => subscription.unsubscribe();
    }, []);

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const alertSignOut = () => {
        Alert.alert(
            `Sign Out?`,
            `Are you sure you want to sign out?`,
            [
                {
                    text: "Sign Out",
                    onPress: () => signOut(),
                    style: "destructive"
                },
                {
                    text: "Cancel"
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }} showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.imageAndButton}>
                        <View style={styles.AvatarMargin}>
                            <TouchableOpacity onPress={pickImage}>
                                {image ? 
                                    <Image 
                                    source={{uri: image}}
                                    style={{ width: 150,  height: 150, aspectRatio: 1, borderRadius: 100, borderWidth: 2}} 
                                    />
                                    :
                                    <S3Image 
                                        imgKey={imageUri} 
                                        style={{ width: 150,  height: 150, aspectRatio: 1, borderRadius: 100, borderWidth: 2}} 
                                    />
                                }
                            </TouchableOpacity>
                        </View>
            
                        <TouchableOpacity onPress={updateImage} activeOpacity={0.5}>
                            <View style={styles.editButton}>
                                    <Ionicons
                                    name="checkmark-outline" 
                                    size={17}
                                    color = '#00BFFF'
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.name]}>
                        <Text style={[styles.text, {borderRadius: 10, borderWidth: 1, paddingVertical: 5, paddingHorizontal: 20}]}>{name}</Text>
                    </View>                    
                    
                    <TouchableOpacity
                        onPress={alertSignOut}
                        activeOpacity={0.5}>
                        <View style={styles.buttons}>
                            <Text style={[styles.text, {color: "white", fontWeight: "600", fontSize: 20 }]}>
                                Sign Out
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        backgroundColor: "red",
        borderRadius: 20,
        paddingVertical: 13,
        justifyContent: "center",
        alignSelf: "center",
        shadowColor: "rgba(20, 40, 100, 0.20)",
        shadowOffset: {width:1, height:4},
        shadowOpacity: 1,
        shadowRadius: 10,
        width: 230,
        height: 60,

      },
    editButton: {
        backgroundColor: "white",
        borderRadius: 8,
        paddingVertical: 13,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "rgba(20, 40, 100, 0.20)",
        shadowOffset: {width:0, height:2},
        shadowOpacity: 1,
        shadowRadius: 5,
        width: 45,
    },
    text: {
        fontFamily: "Avenir Next",
        color: "#1D2029",
        fontSize: 30,
        fontWeight: '500',
        alignSelf: "center"
      },
    imageAndButton: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        padding: 20,
        alignItems: "center",
    },
    imagePicker: {
        marginBottom: 1,
    },
    AvatarMargin: {
        marginRight: 20
    },
})

export default SettingsScreen