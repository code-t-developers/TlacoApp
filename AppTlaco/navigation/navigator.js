import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Image } from 'react-native';


import MonumentosGridScreen from '../screens/monumentosGridScreen';
import Login from '../screens/login';
import Monumento from '../screens/Monumento';
import AboutUsScreen from '../screens/AboutUsScreen';
import bloqueadosGridScreen from '../screens/bloqueadosGridScreen';
import desbloqueadosGridScreen from '../screens/desbloqueadosGridScreen';
import MapsScreen from '../screens/MapsScreen';
import objetosGridScreen from '../screens/objetosGridScreen';
import profileScreen from '../screens/profileScreen';
import SliderBar from '../components/SliderBar';
import MyQRScanner from '../components/MyQRScanner';

const MonumentosObjetosNavigator = createStackNavigator ({
    MonumentosObjetos : {
        screen: desbloqueadosGridScreen,
        navigationOptions : {
            headerTitle: 'Monumentos y objetos'
        }
    },

    Monumento: {
        screen: Monumento,
    },
});

const Navigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions : {
                headerShown : false,
            }
        },

        Monumentos: {
            screen: MonumentosGridScreen,
        },

        MonumentosBloqueados: {
            screen: bloqueadosGridScreen,
        },

        Mapa : {
            screen: MapsScreen,
        },

        Objeto : {
            screen: objetosGridScreen,
        },

        Perfil: {
            screen: profileScreen,
            navigationOptions : {
                headerTitle : 'Inicio',
            }
        },

        Scanner : {
            screen: MyQRScanner,
            navigationOptions : {
                headerTitle: 'Escanear código QR'
            }
        }
    }
);

const AboutUsNavigator = createStackNavigator({
    AboutUsS: {
        screen: AboutUsScreen,
        navigationOptions: {
            headerTitle: 'Nosotros'
        }
    }
});

const MainNavigator = createDrawerNavigator ({
    Inicio : {
        screen: Navigator,
        navigationOptions: {
            drawerIcon : () => (
                <Ionicons name = "ios-home" size = {20} color = 'black'/>
            )
        }
    },
    MonumentosYObjetos: {
        screen: MonumentosObjetosNavigator,
        navigationOptions : {
            drawerLabel: 'Monumentos y objetos',
            drawerIcon: () => (
                <Image
                    style = {{width : 20, height: 20}}
                    source={require('../images/monumento.png')}
                />
            )
        }
    },

    AboutUS : {
        screen: AboutUsNavigator,
        navigationOptions: {
            drawerLabel: 'Nosotros',
            drawerIcon : () => (
                <Ionicons name = "ios-person" size = {20} color = 'black'/>
            )
        }
    },

    LogOut : {
        screen: Login,
        navigationOptions : {
            drawerLabel: 'Cerrar sesión',
            drawerIcon : () => (
                <Ionicons name = "ios-log-out" size = {20} color = 'black'/>
            )
        }
    }
}, {
    drawerWidth: Dimensions.get("window").width * 0.75,
    drawerType: 'slide',
    contentOptions : {
        itemsContainerStyle : {
            marginTop : 16,
            marginHorizontal : 8
        },

        itemStyle : {
            borderRadius: 4
        }
    },

    contentComponent: props => <SliderBar {...props}/>
});

export default createAppContainer(MainNavigator);