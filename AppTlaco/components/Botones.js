import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Botones = props => {
    return (
        <TouchableOpacity activeOpacity={.8}>
            <View style = {styles.botones}>
                <Text style = {styles.textoBotones}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botones: {
        backgroundColor: "#d73352",
        paddingVertical: 10,
        marginVertical: 10,
        paddingHorizontal: '10%',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },

    textoBotones: {
        color: "#FFF",
        fontSize: 18
    },
});

export default Botones;