import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View, Pressable } from "react-native";

export default function Form({addHandler}){
    const [text, setValue] = useState("");

    const OnChange = (text) => {
        setValue(text);
    };

    return(
        <View style={styles.input} >
            <TextInput 
            style={styles.form} 
            onChangeText={OnChange}
            placeholder="Впишите задачу..."
            />
            <Pressable
            style={styles.button} 
            onPress={() => addHandler(text)}
            title="Добавить задачу"
            >Добавить задачу</Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        padding: 20,
        marginBottom:20,
        marginLeft:"auto",
        marginRight:"auto",
    },
    form:{
        padding:20,
        marginBottom:20,
        borderWidth:3,
        borderColor:"#66CDAA",
        borderRadius:20,
        backgroundColor:"white",
    },
    button:{
        backgroundColor: "#66CDAA",
        color:"white",
        padding:20,
        paddingTop: 30,
        paddingBottom:30,
        textAlign:"center",
        borderRadius:20,
    }
});