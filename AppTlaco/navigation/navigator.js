import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MonumentosGridScreen from '../screens/monumentosGridScreen';
import Login from '../screens/login';
import Monumento from '../screens/Monumento';

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
    }
);

export default createAppContainer(Navigator);