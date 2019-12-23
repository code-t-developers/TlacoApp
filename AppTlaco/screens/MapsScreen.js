import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

const MapsScreen = props => {
   
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
        region={{
            latitude: 18.6167,
            longitude: -95.6667,
            latitudeDelta: 0.00999,
            longitudeDelta: 0.00999,
            
        }} 
        showsUserLocation
                loadingEnabled/>
      </View>
    );
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  
});

export default MapsScreen;