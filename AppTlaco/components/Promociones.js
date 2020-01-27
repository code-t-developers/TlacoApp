import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';

import Botones from './Botones';
import Card from './Card';

const screenWidth = Dimensions.get('window').width;

const Promociones = props => {
    return (
        <Card style = {styles.promocionesContainer}>
            <Image
                style={styles.estiloImagen}
                source={require('../images/fridaMezcaleria.jpg')}
            />

            <View style = {styles.textoContainer}>
                <Text style={styles.textoNombrePromo}>{props.nombrePromo}</Text>
                <Text style={styles.textoLocal}>{props.local}</Text>
                <Text style = {styles.textoDescripcion}>{props.descripcion}</Text>
            </View>

            <Botones style = {{marginTop: 15}} title = "INGRESAR PROMOCIÓN" myIcon = "md-add"/>

        </Card>
    );
};

const styles = StyleSheet.create({
    promocionesContainer: {
        alignItems: 'center',
        width: screenWidth - 50,
        margin: 8
    },

    estiloImagen: {
        width: '95%', 
        height: 250,
        alignSelf: 'center',
        borderRadius: 5,
    },

    textoNombrePromo: {
        fontSize:28,
        color: "#d73352",
        fontWeight: "600",
        textAlign: 'center'
    },

    textoLocal: {
        fontSize:22,
        color: "#d73352",
        fontWeight: "600"
    },

    textoDescripcion: {
        fontSize:18,
        color: '#E91E63',
        textDecorationLine: 'underline',
        textAlign: 'center',
        justifyContent: 'center',
        textAlign: 'justify'
    },

    textoContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Promociones;