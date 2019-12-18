import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Titulo = props => {
    return (
        <View >
            <Text style = {styles.estiloTitulo}>{props.titulo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    estiloTitulo: {
        fontSize : 26,
        fontWeight: "bold",
        textAlign: 'center'
    }
});
export default Titulo;