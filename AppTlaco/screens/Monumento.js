import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, FlatList, View, Alert, Button, Dimensions } from 'react-native';
import Botones from '../components/Botones';
import Titulo from '../components/Titulo';
import MyQRScanner from '../components/MyQRScanner';
import ModalsAppTlaco from '../modals/modalsAppTlaco';
import { Video } from 'expo-av';
//import { Trans } from 'react-i18next';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Monumento = props => {
    const [confirmed, setConfirmed] = useState(false);
    const [modalState, setModalState] = useState(false);

    const confirm = () => {
    
        setConfirmed(true);
    };

    let comercial;

    if (confirmed) {
        comercial = (
            <ModalsAppTlaco state={true}/>
        );
    }

    const callQRScanner = () => {
        setModalState(true);
    }

    const cancelScan = () => {setModalState(false);}

    return (
        <ScrollView showsVerticalScrollIndicator = {false} style = {styles.contenedorComponentes}>

            <MyQRScanner visible = {modalState} onCancel = {cancelScan}/>
            
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} style = {{alignContent : 'center'}}>

                <View style = {{paddingEnd : 10}}>
                    <Image
                        style={styles.estiloImagen}
                        source={require('../images/sanMiguelito.jpg')}
                    />
                    <View style = {{borderWidth: 0.3, flex: 1, paddingLeft: 10, opacity: 0.7}}>
                        <Text>Por: Shivo dd</Text>
                    </View>
                </View>

                <View style = {{paddingEnd : 10}}>
                    <Image
                        style={styles.estiloImagen}
                        source={require('../images/sanMiguelito.jpg')}
                    />
                    <View style = {{borderWidth: 0.3, flex: 1, paddingLeft: 10, opacity: 0.7}}>
                        <Text>Por: Shivo</Text>
                    </View>
                </View>
                

                <View style = {{paddingEnd : 10}}>
                    <Image
                        style={styles.estiloImagen}
                        source={require('../images/sanMiguelito.jpg')}
                    />
                    <View style = {{borderWidth: 0.3, flex: 1, paddingLeft: 10, opacity: 0.7}}>
                        <Text>Por: Shivo ll</Text>
                    </View>
                </View>
                
            </ScrollView>

            <Titulo titulo = "Iglesia de San Miguel Arcángel"/>

            <View style = {styles.contenedorTexto}>
                <Text style = {styles.estiloSeparador}>HISTORIA</Text>
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
                <Text style = {styles.estiloSeparador}>EVENTOS QUE SE CELEBRAN</Text>
            </View>

            <View >
                <Text style = {styles.estiloTexto}>
                29 de septiembre se celebra
                </Text>
            </View>

            <View style = {styles.contenedorTexto}>
                <Text style = {styles.estiloSeparador}>MULTIMEDIA</Text>
            </View>

            <View style = {styles.contenedorVideo}>
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    useNativeControls
                    style={{ width: 300, height: 300, borderRadius: 8, borderWidth: 0.5 }}
                />
            </View>

            <View style = {styles.contenedorBotones}>
                <Botones doThis = {callQRScanner} title = "ESCANEAR DE NUEVO"/>
                <Botones title = "INICIO" />
            </View>

            {comercial}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        marginBottom: 20
    },

    estiloImagen: {
        width : screenWidth - 20, 
        height: 250,
        alignSelf: 'center',
        opacity: 0.9,
    },

    contenedorTexto: {
        backgroundColor: '#DD763B',
        padding: 3,
        borderRadius: 5
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
    },

    contenedorComponentes: {
        width : screenWidth - 20,
        alignContent: 'center',
        alignSelf: 'center'
    },

    contenedorVideo: {
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 10
    }
});

export default Monumento;