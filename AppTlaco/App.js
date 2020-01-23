import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/navigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFont = ()  => {
  return Font.loadAsync({
    'GOTHICB': require('./assets/fonts/GOTHICB.ttf'),
    'GOTHIC': require('./assets/fonts/GOTHIC.ttf'),
  });
}

export default function App() {
  const [fontLoaded, setFonLoaded] = useState(false);

  if(!fontLoaded){
    return <AppLoading 
      startAsync = {fetchFont}
      onFinish = { () => setFonLoaded(true)}
    />
  }
  return (
      <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 50,
  },
});
