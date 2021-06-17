import { StatusBar, StyleSheet } from "react-native";

const styles1 = StyleSheet.create ({
    headerText : {
        margin : 10,
        textAlign : "center",
        fontWeight : "bold",
        paddingTop : 20,
    },
    container : {
        flex : 1,
        paddingTop : StatusBar.currentHeight,
        marginHorizontal : 10,
    },
    displayItem : {
        backgroundColor : "lightgreen",
        padding : 20,
        marginVertical : 8,
    },
    textName : {
        fontSize : 20,
    },
    header : {
        fontSize : 30,
        backgroundColor : "#fff",
    }
});

export {styles1};