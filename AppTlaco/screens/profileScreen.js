import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking,
  ScrollView,
  Dimensions
} from 'react-native';
import MyQRScanner from '../components/MyQRScanner';
import Botones from '../components/Botones';

const background = require("../images/back.jpg");

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const ProfileScreen = props => {

  const [modalState, setModalState] = useState(false);
  
  const callQRScanner = () => {
    setModalState(true);
  }

  return (
    <ScrollView style={styles.container}>
      <MyQRScanner visible = {modalState} onCancel = { () => setModalState(false)}/>

      <View style={styles.header}>
        <Image style={{flex: 1,height:'100%', resizeMode: 'stretch'}} source={background}/>
      </View>

      <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Silvio Hermida</Text>
          <Text style={styles.info}>Puntaje: 2500</Text>

          <Botones customFontSize = {13} title = "MONUMENTOS Y OBJETOS" myIcon = "md-unlock" 
            doThis = {() => {
              props.navigation.navigate({routeName: 'MonumentosDesbloqueados'});
            }}
          />

          <Botones style = {{marginTop: 10}} customFontSize = {13} title = "MONUMENTOS Y OBJETOS" myIcon = "md-lock" 
            doThis = {() => {
              props.navigation.navigate({routeName: 'MonumentosBloqueados'});
            }}
          />
              
              
          <Botones style = {{marginTop: 10}} title = "MAPA" myIcon = "md-pin" 
            doThis = {() => {
              props.navigation.navigate({routeName: 'Mapa'});
            }}
          />

          <Botones style = {{marginTop: 10}} doThis = {callQRScanner} title = "ESCANEAR" myIcon = "md-qr-scanner"/>

        </View>

        <View style={styles.promocionesContainer}>
          <Text style={styles.name}>Promociones</Text>
             
          <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} style = {{alignContent : 'center', margin: 20}}>
            <View style = {{paddingEnd : 10, width: '20.5%'}}>
              <Image
                style={styles.estiloImagen}
                source={require('../images/fridaMezcaleria.jpg')}
              />

              <View style = {styles.containerTextoPromociones}>
                <Text style={styles.textoTituloPromociones}>Frappe Gratis</Text>
                <Text style={styles.textoPromociones}>K-Fecito</Text>
                <View style = {{width: '90%'}}>
                <Text style={styles.textoDescripcionPromociones}>
                  ¡Gana 5 tacos de pastor! Sólo contesta la trivia y escanea el cógido QR que se encuentra en el establecimiento
                </Text>
                </View>
                {/** 
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={{color:'white'}}>Ingresar promoción</Text> 
                </TouchableOpacity>
                */}
                <Botones style = {{marginTop: 15}} title = "INGRESAR PROMOCIÓN" myIcon = "md-add"/>
              </View>
            </View>

            <View style = {{paddingEnd : 10}}>
              <Image
                style={styles.estiloImagen}
                source={require('../images/fridaMezcaleria.jpg')}
              />
              <View style = {styles.containerTextoPromociones}>
                <Text style={styles.textoTituloPromociones}>Shots Gratis</Text>
                <Text style={styles.textoPromociones}>Frida Mezcaleria</Text>
                <Text style={styles.textoDescripcionPromociones}>
                  ¡Ganate 5 tacos de pastor! {"\n"} contestando la trivia y escaneando {"\n"} el cógido qr que se encuentra en el {"\n"} establecimiento
                </Text>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={{color:'white'}}>Ingresar promoción</Text> 
                </TouchableOpacity>
              </View>
            </View>
                
            <View style = {{paddingEnd : 10}}>
              <Image
                style={styles.estiloImagen}
                source={require('../images/fridaMezcaleria.jpg')}
              />
              <View style = {styles.containerTextoPromociones}>
                <Text style={styles.textoTituloPromociones}>5 tacos de pastor Gratis</Text>
                <Text style={styles.textoDescripcionPromociones}>Ganate 5 tacos de pastor {"\n"} contestando la trivia y escaneando {"\n"} el cógido qr que se encuentra en el {"\n"} establecimiento</Text>
                <Text style={styles.textoPromociones}>Tacos: el pastorcito</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={{color:'white'}}>Ingresar promoción</Text> 
                </TouchableOpacity>
              </View>
            </View>
                
          </ScrollView>
          
          <Text style = {{marginBottom: 15}}>Made by: Code-T</Text>
        </View>

      </View>
    </ScrollView>
  );
  
};

const styles = StyleSheet.create({
   header:{
    backgroundColor: "#d73352",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#d73352",
    fontWeight: "600"
  },
  info:{
    fontSize:26,
    color: "#00BFFF",
    marginVertical:10,
  },
  description:{
    fontSize:18,
     marginVertical: 5,
    textAlign: 'center',
     color: '#E91E63',
    textDecorationLine: 'underline'
  },
  buttonContainer: {
    marginTop:20,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#d73352",
  },
  promocionesContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EAECED',
    paddingTop: 20
  },
   estiloImagen: {
        width : screenWidth - 50, 
        height: 250,
        alignSelf: 'center',
        opacity: 0.9,
    },
    containerTextoPromociones:{
      borderWidth: 5, 
      flex: 1, 
      paddingLeft: 10, 
      opacity: 0.7,
      borderColor: 5,
      alignItems: 'center',
    },
    textoTituloPromociones:{
      fontSize:28,
      color: "#d73352",
      fontWeight: "600"
    },
    textoPromociones:{
      fontSize:22,
      color: "#d73352",
      fontWeight: "600"
    },
    textoDescripcionPromociones:{
      fontSize:18,
      color: '#E91E63',
      textDecorationLine: 'underline',
      textAlign: 'center'
    }
});

export default ProfileScreen;
