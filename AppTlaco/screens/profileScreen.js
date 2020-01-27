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
import { DrawerActions } from 'react-navigation-drawer'
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import { NavigationActions } from 'react-navigation';

import Botones from '../components/Botones';
import HeaderButton from '../components/HeaderButton';
import Promociones from '../components/Promociones';
import { FlatList } from 'react-native-gesture-handler';
import {PROMODATA} from '../data/promociones';

const background = require("../images/back.jpg");

const screenWidth = Dimensions.get('window').width;

const ProfileScreen = props => {
  const renderPromoHandler = (itemData) => {
    return (
      <Promociones 
        nombrePromo = {itemData.item.nombrePromo}
        local = {itemData.item.local}
        descripcion = {itemData.item.descripcion}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Image style={{flex: 1,height:'100%', resizeMode: 'stretch'}} source={background}/>
      </View>

      <Image style={styles.avatar} source={{uri: state.photoUrl}}/>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
  <Text style={styles.name}>{state.name}</Text>
          <Text style={styles.info}>Puntaje: 2500</Text>

          <Botones customFontSize = {13} title = "MONUMENTOS Y OBJETOS" myImageIcon = {require('../images/monumentoBlanco.png')}
            doThis = {() => {
              props.navigation.navigate(NavigationActions.navigate({
                routeName: 'MonumentosObjetos'
              }));
            }}
          />
          
          <Botones style = {{marginTop: 10}} title = "MAPA" myIcon = "md-pin" 
            doThis = {() => {
              props.navigation.navigate({routeName: 'Mapa'});
            }}
          />

          <Botones style = {{marginTop: 10}} doThis = {() => {props.navigation.navigate('Scanner')}} title = "ESCANEAR" myIcon = "md-qr-scanner"/>

        </View>

       <View style={styles.promocionesContainer}>
          <Text style={styles.name}>Promociones</Text>

          <FlatList 
            keyExtractor={(item,index) => item.id}
            data={PROMODATA}
            renderItem={renderPromoHandler}
            horizontal = {true}
          />
          
          <Text style = {{marginBottom: 15}}>Made by: Code-T</Text>
        </View>

      </View>
    </ScrollView>
  );
  
};



ProfileScreen.navigationOptions = navData =>{
  return {
    headerLeft : () => (<HeaderButtons HeaderButtonComponent = {HeaderButton}>
      <Item 
        title = "Menu"
        iconName = 'ios-menu'
        onPress = {() => {
          navData.navigation.dispatch(DrawerActions.toggleDrawer(), {params: {
            name : state.name,
            photoUrl: state.photoUrl
          }});
        }}
      />
    </HeaderButtons>)
  };
}


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
