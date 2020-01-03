import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Monumento from './screens/Monumento';
import MonumentosGridScreen from './screens/monumentosGridScreen';
import Navigator from './navigation/navigator';
import * as Font from 'expo-font';

export default function App() {
  return (
      <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 50,
  },
});
