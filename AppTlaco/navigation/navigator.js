import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';


import MonumentosGridScreen from '../screens/monumentosGridScreen';
import Login from '../screens/login';
import Monumento from '../screens/Monumento';
import aboutUsScreen from '../screens/aboutUsScreen';
import bloqueadosGridScreen from '../screens/bloqueadosGridScreen';
import desbloqueadosGridScreen from '../screens/desbloqueadosGridScreen';
import MapsScreen from '../screens/MapsScreen';
import objetosGridScreen from '../screens/objetosGridScreen';
import profileScreen from '../screens/profileScreen';
import AboutUsScreen from '../screens/aboutUsScreen';

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

        Nosotros : {
            screen: aboutUsScreen,
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
        }
    }
);


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
            drawerLabel: 'Monumentos y objetos'
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
    },

    AboutUS : {
        screen: AboutUsScreen,
        navigationOptions: {
            drawerLabel: 'Nosotros'
        }
    }
}, {
    drawerWidth: Dimensions.get("window").width * 0.75,
    drawerType: 'slide'
   // hideStatusBar: true
});

export default createAppContainer(MainNavigator);