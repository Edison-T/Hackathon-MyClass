import React, {useEffect, useLayoutEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser } from '../../src/graphql/queries';

const ChooseYourRoleButton = () => {
    const navigation = useNavigation();
    


    const onPress = () => {
            navigation.navigate('Choose Your Role')
           };

           
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
                <MaterialCommunityIcons
                    name="account-alert" 
                    size={37}
                    color = 'white'
                />
            </TouchableOpacity>
        </View>
        
    )
}

export default ChooseYourRoleButton;