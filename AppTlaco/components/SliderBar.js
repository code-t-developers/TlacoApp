import React from 'react';

import { ImageBackground, Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigatorItems} from 'react-navigation-drawer';

export default SliderBar = props => (
    <ScrollView>
        <ImageBackground
            source = {require('../images/background.jpg')}
            style = {styles.background}
        >
            <Image source = {{uri: state.photoUrl}} style = {styles.profile}/>
            <Text style = {styles.name}>{state.name}</Text>

            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.score}>2500 puntos</Text>
                <Ionicons name = 'ios-stats' color = 'white' size = {15}/>
            </View>

        </ImageBackground>

        <View style = {styles.container}>
            <DrawerNavigatorItems {...props}/>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    background: {
        width: undefined,
        padding: 16, 
        paddingTop: 48,
    }, 

    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff'
    },

    name : {
        color : '#fff',
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    },

    score : {
        color: 'white',
        fontSize: 13,
        marginRight: 4
    }
});
