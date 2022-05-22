import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
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
        fontSize: 13,
        color: 'grey',
        fontFamily: 'Avenir Next',
        marginRight: 30
    },
    time: {
        fontSize: 13,
        color: 'grey',
        fontFamily: 'Avenir Next',
    },
});

export default styles;