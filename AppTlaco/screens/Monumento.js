import React from 'react';
import { StyleSheet, Text, ScrollView, Image, FlatList, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Botones from '../components/Botones';
import Titulo from '../components/Titulo';
import WebComponent from '../components/WebComponent';
import { Trans } from 'react-i18next';


/*class WebVideo extends Component {
    render() {
      return (
        <WebView
          originWhitelist={['*']}
          source={{ html: '<h1>Hello world</h1>' }}
        />
      );
    }
}*/

 /*function MyComponent () {
    return <Trans><Text>Bienvenido a React</Text></Trans>;
  }*/
  

const Monumento = props => {
    return (
        <ScrollView showsVerticalScrollIndicator = {false} style = {styles.contenedorComponentes}> 
            
            <Image
                style={styles.estiloImagen}
                source={require('../images/sanMiguelito.jpg')}
            />

            <Titulo titulo = "Iglesia de San Miguel Arcángel"/>

            <View style = {styles.contenedorTexto}>
                <Trans><Text style = {styles.estiloSeparador}>Welcome to React</Text></Trans>
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
                <Text style = {styles.estiloSeparador}>MULTIMEDIA</Text>
            </View>

            {/*

            <View style = {{height: 130, marginTop: 20}}>
                <ScrollView horizontal = {true}>
                    <View style = {{height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, justifyContent: 'space-around'}}>
                        <View style = {{flex: 2}}>
                            <Image
                                style = {{flex: 1, width: null, height: null, resizeMode: 'cover'}}
                                source={require('../images/sanMiguelito.jpg')}
                            />
                        </View>

                        <View style = {{flex: 2}}>
                            <Image
                                style = {{flex: 1, width: null, height: null, resizeMode: 'cover'}}
                                source={require('../images/sanMiguelito.jpg')}
                            />
                        </View>

                        <View style = {{flex: 2}}>
                            <Image
                                style = {{flex: 1, width: null, height: null, resizeMode: 'cover'}}
                                source={require('../images/sanMiguelito.jpg')}
                            />
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
    
            <WebComponent/>

            */}
            
            <View style = {styles.contenedorTexto}>
                <Text style = {styles.estiloSeparador}>MULTIMEDIA</Text>
            </View>

            <View style = {styles.contenedorBotones}>
                <Botones title = "Escanear de nuevo"/>
                <Botones title = "Inicio"/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contenedorBotones: {
        flexDirection: 'row',
        //width: '100%',
        justifyContent: 'space-around',
        //marginVertical: '5%',
        alignContent: 'center',
        paddingTop: 20
    },

    estiloImagen: {
        width: 250, 
        height: 250,
        alignSelf: 'center',
        marginVertical: 20,
        opacity: 0.9,
        borderRadius: 8
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
        width: '130%',
        height: '100%'
    }
});

export default Monumento;