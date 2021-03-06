import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Ionicons } from '@expo/vector-icons';


const Botones = props => {
    if(props.myIcon){
        return (
            <TouchableOpacity activeOpacity={.5} style = {{...styles.botones, ...props.style}} onPress = {props.doThis}>
                <Ionicons name = {props.myIcon} size = {27} color = "white" style = {{margin: 5}}/>
                <Text style = {{...styles.textoBotones, ...{fontSize : props.customFontSize}}}>{props.title}</Text>
            </TouchableOpacity>
        );
    }else if(props.myImageIcon){
        return (
            <TouchableOpacity activeOpacity={.5} style = {{...styles.botones, ...props.style}} onPress = {props.doThis}>
                <Image
                        style = {{width : 30, height: 30}}
                        source={props.myImageIcon}
                />
                <Text style = {{...styles.textoBotones, ...{fontSize : props.customFontSize}}}>{props.title}</Text>
            </TouchableOpacity>
        );    
    }

};

const styles = StyleSheet.create({
    botones: {
        paddingHorizontal: '9%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'red',
        borderRadius: 5,
        width : 150,
        height: 45,
        flexDirection: 'row'
    },

    textoBotones: {
        color: "#FFF",
        //fontSize: 15,
        textAlign: 'center'
    },
});

export default Botones;