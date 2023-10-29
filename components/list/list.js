import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({el, deleteHandler}) {
    return(
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius:5,
        borderColor:"#66CDAA",
        backgroundColor:"white",
        borderWidth:3,
        borderRadius:20,
        marginTop:20,
        width:"30%",
        marginLeft:"auto",
        marginRight:"auto",
    },
});