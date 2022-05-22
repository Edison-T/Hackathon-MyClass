import React, {useLayoutEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, Text, Alert, ActivityIndicator } from 'react-native';
import { StatusBar } from "expo-status-bar";
import ContactListItem from '../components/ContactListItem'; // A.K.A 'index.tsx'
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';


import { useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../src/graphql/queries';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const NewPrivateForTeachers = () => {

    const [studentsAndTeacher, setStudentsAndTeachers] = useState ([]);
    const [searchUserName, setSearchUserName] = useState("");
    const [searchLoading, setSearchLoading] = useState(false)
    const navigation = useNavigation();

    useLayoutEffect (() => {
        navigation.setOptions({
            title: "Search for User",
              headerLeft: () => (
                <View>
                  <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Private Chat Home Screen')}>
                  <Ionicons
                        name="chevron-back-outline" 
                        size={35}
                        color = 'white'
                    />
                </TouchableOpacity>
                </View>
              )
      }), [navigation]});

    const fetchUsers = async () => {
        setSearchLoading(true)
        try {
            const usersData = await API.graphql(
                graphqlOperation(
                    listUsers, {
                        filter: { name: {eq: searchUserName}} //add eq: role for students
                    }
                )
            )
            setStudentsAndTeachers(usersData.data.listUsers.items);
            console.log(usersData.data.listUsers.items)
            setSearchLoading(false)
        } catch (e) {
            console.log(e);
            Alert.alert("Oops! An error has occurred")
            setSearchLoading(false)
            return;
        } 
    }     


    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Search user..." 
                    value={searchUserName} 
                    onChangeText={(text) => setSearchUserName(text)}
                    clearButtonMode="always"
                />
                <TouchableOpacity
                    onPress={fetchUsers}
                    activeOpacity={0.5}
                >
                    <View style={styles.editButton}>
                        {searchLoading ? 
                            <ActivityIndicator size="small" color="#00BFFF" />
                            :
                            <Ionicons
                                name="search-outline" 
                                size={20}
                                color = '#00BFFF'
                            />
                        }
                    </View>
                </TouchableOpacity>
            </View>
            
            <View>
                
            </View>

            <FlatList
                style={{ width: '100%' }}
                data={studentsAndTeacher}
                renderItem={({ item }) => <ContactListItem user={item} />}
                keyExtractor={(item) => item.id}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    editButton: {
        backgroundColor: "white",
        fontSize: 16,
        borderRadius: 8,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "rgba(20, 40, 100, 0.20)",
        shadowOffset: {width:0, height:2},
        shadowOpacity: 1,
        shadowRadius: 5,
        width: 50,
    },
    inputContainer: {
        marginBottom: 50,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
    },
    textInput: {
        alignItems: 'center',
        textAlign: 'center',
        height: 70,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        fontSize: 25,
        fontFamily: 'Avenir Next',
        width: 320,
        marginRight: 20
    },
})

export default NewPrivateForTeachers