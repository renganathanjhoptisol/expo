import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    // container : {
    //     flex : 1,
    //     backgroundColor : "skyblue",
    // },
    headerText : {
        paddingTop : 20,
        marginBottom : 10,
        textAlign : "center",
        fontWeight : 'bold',
    },
    listItem : {
        backgroundColor : "#ddd",
        flexDirection : "row",
        marginVertical : 10,
        padding : 10,
    },
    listName : {
        flex : 0.5,
        textAlign : "center",
        alignItems : "flex-start",
    },
    listSalary : {
        flex : 0.5,
        textAlign : "center",
        alignItems : "flex-end",
    }
});

export {styles};