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
                <Text style = {styles.estiloSeparador}>DESCRIPCIÓN</Text>
            </View>

            <View >
                <Text style = {styles.estiloTexto}>
                Tlacotalpan perteneció al territorio Totonaca en el siglo XII, por lo que su fundación se remonta a esa época. 
                Era cabecera de Atlizintla (hoy Alvarado), Xiuhbiapan, Ahuatcopan, Pozutlan y Tlazintlata, en el siglo XV, 
                luego de tomar Cempoala y Cotaxtla, Axayácatl sometió al antiguo asentamiento indígena al Imperio azteca en 1475, 
                en el contexto de la Conquista de Tochpan (Tuxpan) de 1480, y bautizó al asentamiento con el nombre de Tlācotālpan, 
                que significa: entre aguas.
                </Text>
            </View>

            <View style = {styles.contenedorTexto}>
                <Text style = {styles.estiloSeparador}>¿SABÍAS QUÉ?</Text>
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
        marginVertical: 20,
        opacity: 0.9
    },

    contenedorTexto: {
        backgroundColor: '#DD763B',
        padding: 3
    },

    estiloTexto : {
        color: 'black',
        textAlign: 'justify',
        padding: 10
    },

    estiloSeparador: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
});

export default Monumento;