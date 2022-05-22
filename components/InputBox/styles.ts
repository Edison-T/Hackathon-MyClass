import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 3,
        marginBottom: 10,
        marginTop: 8,
        alignItems: "center",
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        marginRight: 6,
        flex: 1,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 5,
        shadowOpacity: 0.1,
        alignItems: "center",
    },
    testingMentionInput: {
        padding: 12,
        paddingRight: 13,
        paddingLeft: 13,
        borderRadius: 20,
        maxHeight: 130,
        fontSize: 16,
        //maxWidth: 255,
        //width: 250,
        maxWidth: "100%",
        width: "100%",
        minWidth: "100%"
    },
    // textInput: {
    //     fontSize: 16,
    //     flex: 1,
    // },
    buttonContainer: {
        backgroundColor: '#00BFFF',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
    icon: {
        marginHorizontal: 5,
        justifyContent: "center"
    },
    sendImageContainer: {
        flexDirection: "row",
        marginVertical: 10,
        height: 150,
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 10,
      },
      listUsersBox: {
        marginBottom: 8,
        backgroundColor: "white",
        width: 255, //300
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "grey",
        borderBottomWidth: 0.3,
        // shadowColor: "#000",     <= for cool shadow effects on the users
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        padding: 10,
      }
})

export default styles;