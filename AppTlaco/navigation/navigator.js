import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MonumentosGridScreen from '../screens/monumentosGridScreen';
import Login from '../screens/login';
import Monumento from '../screens/Monumento';
import aboutUsScreen from '../screens/aboutUsScreen';
import bloqueadosGridScreen from '../screens/bloqueadosGridScreen';
import desbloqueadosGridScreen from '../screens/desbloqueadosGridScreen';
import MapsScreen from '../screens/MapsScreen';
import objetosGridScreen from '../screens/objetosGridScreen';
import profileScreen from '../screens/profileScreen';

const Navigator = createStackNavigator(
    {
        Login: {
            screen: Login,
        },

        Monumentos: {
            screen: MonumentosGridScreen,
        },

        Monumento: {
            screen: Monumento,
        },

        Nosotros : {
            screen: aboutUsScreen,
        },

        MonumentosBloqueados: {
            screen: bloqueadosGridScreen,
        },

        MonumentosDesbloqueados: {
            screen: desbloqueadosGridScreen,
        },

        Mapa : {
            screen: MapsScreen,
        },

        Objeto : {
            screen: objetosGridScreen,
        },

        Perfil: {
            screen: profileScreen,
        }
    }
);

export default createAppContainer(Navigator);