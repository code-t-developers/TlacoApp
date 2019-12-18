import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Botones = props => {
    return (
        <View style = {styles.botones}>
            <Button title = {props.title}/>
        </View>
    );
};

const styles = StyleSheet.create({
    botones: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        width: '90%'
    },

    textoBotones: {
        color: 'white',
       // fontFamily: 'open-sans',
        fontSize: 18,
        justifyContent: 'center'
    },
});

export default Botones;