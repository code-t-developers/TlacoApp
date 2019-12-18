import React from 'react';
import { StyleSheet, Text, ScrollView, Image, FlatList, View } from 'react-native';
import Botones from '../components/Botones';
import Titulo from '../components/Titulo';

const Monumento = props => {
    return (
        <ScrollView style = {{width: '129%'}}> 
            
            <Image
                style={styles.estiloImagen}
                source={require('../images/sanMiguelito.jpg')}
            />

            <Titulo titulo = "Iglesia de San Miguel Arcángel"/>

            <View style = {styles.contenedorTexto}>
                <Text style = {styles.estiloTexto}>
                    A lo largo de la historia jajajaja. Pues las coskajks jKj kdjf lkdjf adlkja dkff
                    A lo largo de la historia jajajaja
                    A lo largo de la historia jajajaja
                    A lo largo de la historia jajajaja


                    A lo largo de la historia jajajajaA lo largo de la historia jajajaja
                    A lo largo de la historia jajajaja
                    A lo largo de la historia jajajaja

                    A lo largo de la historia jajajaja
                </Text>
            </View>

            <Botones title = "Escanear"/>
            <Botones title = "Inicio"/>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contenedorBotones: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 90,
        alignItems: 'center'
    },

    estiloImagen: {
        width: 200, 
        height: 200,
        alignSelf: 'center',
        marginVertical: 20
    },

    contenedorTexto: {
        backgroundColor: '#3A5E5E',
        opacity: 0.7
    },

    estiloTexto : {
        color: 'white'
    }
});

export default Monumento;