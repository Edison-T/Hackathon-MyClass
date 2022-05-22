import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from "expo-status-bar";
import ContactListItem from '../components/ContactListItem'; // A.K.A 'index.tsx'

import { useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../src/graphql/queries';
import { useState } from 'react';


const ContactsScreen = () => {

    const [users, setUsers] = useState ([]);

    useEffect( () => {
        const fetchUsers = async () => {
            try {
                const usersData = await API.graphql(
                    graphqlOperation(
                        listUsers
                    )
                )
                setUsers(usersData.data.listUsers.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchUsers();
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            <FlatList
                style={{ width: '100%' }}
                data={users}
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
})

export default ContactsScreen