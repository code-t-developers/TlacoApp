import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking
} from 'react-native';
const background = require("../images/back.jpg");
const ProfileScreen = props => {
	

    return (
       <View style={styles.container}>
          <View style={styles.header}>
          <Image style={{flex: 1,height:'100%', resizeMode: 'stretch'}} source={background}/>
          </View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Silvio Hermida</Text>
              <Text style={styles.info}>Puntaje: 2500</Text>
              
              <Text style={styles.description} onPress={ ()=> Linking.openURL('https://google.com') }>
                Monumentos y objetos Descubiertos
              </Text>
              
              
              <Text style={styles.description}>
                Promociones
              </Text>
              
              
              <Text style={styles.description}>
                Mapa
              </Text>
              
              
                           
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color:'white'}}>Atras</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
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
});

export default ProfileScreen;
