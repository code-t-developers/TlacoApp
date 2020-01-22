import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';

import HeaderButton from '../components/HeaderButton';

const background = require("../images/codet.jpg");

const AboutUsScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{height:'100%'}} source={background}/>
      </View>

      <Image style={styles.avatar} source={background}/>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>
            Code-T
          </Text>
              
          <Text style={styles.info}>

          </Text>

          <Text style={styles.description}>
            Code-T es una empresa de desarrollo de 
          	software formada por un grupo de jóvenes programadores y 
          	desarrolladores entusiastas que a través de sus habilidades y
          	conocimientos llevan a cabo la creación de software orientado a
          	las necesidades del cliente.
          </Text>
                           
        </View>
      </View>
    </View>
  );
  
};

AboutUsScreen.navigationOptions = navData =>{
  return {
    headerLeft : () => (<HeaderButtons HeaderButtonComponent = {HeaderButton}>
      <Item 
        title = "Menu"
        iconName = 'ios-menu'
        onPress = {() => {
          navData.navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      />
    </HeaderButtons>)
  };
}

const styles = StyleSheet.create({
  header:{
    height:200,
    alignItems:'center'
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
    color:"#d73352",
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
    color: "#00BFFF",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    //marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'justify',
    marginVertical: '5%'
  },
  buttonContainer: {
    marginBottom:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: '#d73352',
  },
});

export default AboutUsScreen;
