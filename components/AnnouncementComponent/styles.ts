import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    messageBox: {
        borderRadius: 20,
        padding: 10,
        marginBottom: 5,
        backgroundColor: "white",
        shadowColor: "rgba(20, 40, 100, 0.20)",
        shadowOffset: {width:1, height:4},
        shadowOpacity: 1,
        shadowRadius: 7,
    },
    name: {
        color: "black",
        fontWeight: "bold"
    },
    title: {
        color: "#00BFFF",
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10,
        fontSize: 19
    },
    message: {
        fontSize: 17,
        marginBottom: 8,
        marginTop: 5
    },
    renderSeparator: {
        backgroundColor: 'grey',
        height: 1,
        marginTop: 4.5,
        marginBottom: 5,
    },
    editAndDeleteText: {
        fontFamily: "Avenir Next",
        fontSize: 15,
        textAlign: "center",
    },
    editAndDeleteBox: {
        width: 100, 
        padding: 8, 
        borderWidth: 2, 
        borderRadius: 10,
        alignSelf: "flex-end",
        position: "absolute",
        right: 15,
        top: 45,
        backgroundColor: "white"
    }
});

export default styles;