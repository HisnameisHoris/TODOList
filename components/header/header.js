import React from "react";
import { StyleSheet, View, Text } from "react-native-web";

export default function Header(){
    return(
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        padding: 20,
        marginBottom:20,
        marginTop:30,
    },
    text:{
        fontSize:50,
        textAlign: "center",
    },
});