import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50,
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    midContainer: {
        justifyContent: 'space-around',
        //left: -20
    },
    leftContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Avenir Next',
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
        fontFamily: 'Avenir Next',
    },
    time: {
        fontSize: 14,
        color: 'grey',
        fontFamily: 'Avenir Next',
    },
});

export default styles;