import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: "#00BFFF",
        fontSize: 16,
        borderRadius: 8,
        paddingVertical: 13,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        shadowColor: "rgba(20, 40, 100, 0.20)",
        shadowOffset: {width:0, height:9},
        shadowOpacity: 1,
        shadowRadius: 20,
        width: 275,
        flexDirection: "row"
      },
    text: {
        fontFamily: "Avenir Next",
        color: "#1D2029"
      },
    
})

export default styles;