import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';

const background = require("../images/tlaco.jpg");
const lockIcon = require("../images/lock.png");
const personIcon = require("../images/person.png");

const Login = props =>{
  return (
    <ImageBackground
    style={[styles.background, styles.container]} 
    source={background}
    resizeMode="cover"
    >
    <View style={styles.back}>
<View style={styles.container} />
    <View style={styles.wrapper}>
    <View style={styles.titleLocate}>
        <Text style={styles.title}>Bienvenido a TlacoApp</Text>
    </View>
    <View style={styles.inputWrap}>
    <View style={styles.iconWrap}>

    <ImageBackground
    source={personIcon}
    style={styles.icon}
    resizeMode="contain"
    />
    </View>
    <TextInput
    placeholder="Correo"
    style={styles.input}
    underlineColorAndroid="transparent"
    />
    </View>
    <View style={styles.inputWrap}>
    <View style={styles.iconWrap}>
    <ImageBackground
    source={lockIcon}
    style={styles.icon}
    resizeMode="contain"
    />
    </View>
    <TextInput
    placeholder="Contraseña"
    secureTextEntry
    style={styles.input}
    underlineColorAndroid="transparent"
    />
    </View>
    <TouchableOpacity activeOpacity={.5} 
    onPress = {() => {
      props.navigation.navigate({
        routeName: 'Perfil'
      });
    }}>
    <View style={styles.button}>
    <Text style={styles.buttonText}>Ingresar</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={.5}>
    <View>
    <Text style={styles.forgotPasswordText}>Olvido Contraseña?</Text>
    </View>
    </TouchableOpacity>
    </View>
    <View style={styles.section}>
    <View style={styles.hairline} />
    <Text style={styles.loginButtonBelowText1}>OR</Text>
    <View style={styles.hairline} />

     <TouchableOpacity activeOpacity={.5}>
    <View style={styles.button}>
    <Text style={styles.buttonText}>Ingresar Con Google</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={.5}>
    <View style={styles.button}>
    <Text style={styles.buttonText}>Ingresar Con Facebook</Text>
    </View>

    </TouchableOpacity>
    </View>

    <View style={styles.container} />
    </View>

    </ImageBackground>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      width: null,
      height: null,

    },
    wrapper: {
      paddingHorizontal: 15,
      marginTop:'10%',

    },
    inputWrap: {
      flexDirection: "row",
      marginVertical: 10,
      height: 40,
      backgroundColor: "transparent"
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: '#FFF'
    },
    iconWrap: {
      paddingHorizontal: 7,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#d73352"
    },
    icon: {
      width: 20,
      height: 20,
    },
    button: {
      backgroundColor: "#d73352",
      paddingVertical: 10,
      marginVertical: 10,
      alignItems: "center",
      justifyContent: "center"
    },
    buttonText: {
      color: "#FFF",
      fontSize: 18
    },
    forgotPasswordText: {
      color: "white",
      backgroundColor: "transparent",
      textAlign: "center"
    },
    hairline: {
      backgroundColor: '#CC0000',
      height: 2,
      width: '100%'
    },

    loginButtonBelowText1: {
      //fontFamily: 'AvenirNext-Bold',
      fontSize: 14,
      paddingHorizontal: 5,
      alignSelf: 'center',
      color: '#CC0000'
    },
    section: {
      paddingHorizontal:15
    },
    back: {
      marginTop: "25%",
      backgroundColor: "#3A5E5E",
      opacity: .7
    },
    title:{
      fontSize: 25,
      color:"white"
    },
    titleLocate:{
      justifyContent: 'center',
      alignItems: 'center',

    }

  });

  export default Login;