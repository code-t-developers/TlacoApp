import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Botones = props => {
    return (
        <TouchableOpacity activeOpacity={.8} style = {styles.botones}>
            <Text style = {styles.textoBotones}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botones: {
        //paddingVertical: 10,
        //marginVertical: 10,
        paddingHorizontal: '10%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'red',
        borderRadius: 5,
        width : 150,
        height: 45
    },

    textoBotones: {
        color: "#FFF",
        fontSize: 15,
        textAlign: 'center'
    },
});

export default Botones;