import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';



export default class MapsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: []
    }
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e) {
    this.setState({
      
    })
  }
  render() {
    return (
      <MapView 
        style={styles.container}
        initialRegion={{
            latitude: 18.612139,
            longitude: -95.66064,
            latitudeDelta: 0.003800498140101638,
            longitudeDelta: 0.004055164754404927,
          }} 
          onPress={this.handlePress}
      >
      <Marker coordinate={{ latitude: 18.614095, longitude:  -95.657981 }} 
      title={"Iglesia de San Miguel"}
      description={"Av. Bernardino Aguirre, Tlacotalpan, VER, México"}/>  
     <Marker coordinate={{ latitude: 18.612016, longitude:  -95.657775 }}
      title={"Teatro Nezahualcóyotl"}
      description={"Guillermo Cházaro Lagos, Tlacotalpan, VER, México"}  />  
     <Marker coordinate={{ latitude:  18.612497 , longitude:  -95.659916}}
      title={"Museo Salvador Ferrando"}
      description={"Manuel Maria Alegre 6, Tlacotalpan, VER, México"} /> 
      <Marker coordinate={{ latitude:  18.612596 , longitude:  -95.660802}}
      title={"Iglesía de la Virgen de la Candelaria,"}
      description={"Plaza Miguel Hidalgo, Tlacotalpan, VER, México"} /> 
      <Marker coordinate={{ latitude:  18.612052 , longitude:  -95.661801}}
      title={"Templo Parroquial de San Cristobal"}
      description={"Avenida Miguel Z. Cházaro, Tlacotalpan, VER, México"} />  
       <Marker coordinate={{ latitude:  18.612081 , longitude:  -95.661162}}
      title={"Plaza Zaragoza"}
      description={"VER, México"} />  
      <Marker coordinate={{ latitude:  18.611891, longitude:  -95.656176}}
      title={"Casa de cultura Agustin Lara"}
      description={"Mex 175, Tlacotalpan, VER, México"} />
      <Marker coordinate={{ latitude:  18.612957, longitude:  -95.653315}}
      title={"Mini Zoologico de Pio Barran Barteliiihhff,"}
      description={"Mex 175, Tlacotalpan, VER, México"} />

 
 

      {this.state.markers.map((marker) => {
        return (
          <Marker {...marker} >
            <View style={styles.marker}>
              <Text style={styles.text}>{marker.cost}</Text>
            </View>
          </Marker>
        )
      })}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height:'100%'
  },
  marker: {
    backgroundColor: "#550bbc",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
});

AppRegistry.registerComponent('MapsScreen', () => MapsScreen);