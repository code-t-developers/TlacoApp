import React from 'react';
import MapsScreen from './screen/MapsScreen';
import { StyleSheet, Text, View } from 'react-native';
import Monumento from './screens/Monumento';
import * as Font from 'expo-font';

export default function App() {
  return (
    <View style={styles.container}>
      <Monumento />
    <MapsScreen />

    </View>
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
