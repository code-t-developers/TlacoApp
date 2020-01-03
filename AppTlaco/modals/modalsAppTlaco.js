import React, {Component} from 'react';
import {View, ScrollView, Modal, Button, Text, StyleSheet, Image} from 'react-native';

class ModalsAppTlaco extends Component{
    constructor() {
        super();
        this.state = {
          visibility: true,
        };
      }

      setModalVisibility(visible) {
        this.setState({
          visibility: visible,
        });
      }
    
      render() {
          const {
              estiloModal,
              estiloImagen,
              estiloTexto,
              estiloContenedorTexto,
              estiloTitulo,
              estiloBoton,
              vBoton,
              estiloCentrado
          } = styles;
        return (

            <Modal
              animationType={'slide'}
              transparent
              visible={this.state.visibility}
            >
              <ScrollView style={estiloModal}>
                <Image
                  style={estiloImagen}
                  source={require('../images/fridaMezcaleria.jpg')}
                  />
                <Text style = {estiloTitulo}>Frida Mezcalería</Text>
                <View>
                    <View style = {estiloContenedorTexto}>
                      <Text style={estiloTexto}>
                      Lugaar donde puedes pasar un rato agradable, todo barato. {"\n"} {"\n"}
                      Horario de atención: 20:00 - 03:00. {"\n"} {"\n"}
                      Dirección: Venustiano Carranza SN.
                      </Text>
                    </View>
                </View>
                <View style = {estiloCentrado}>
                  <View style = {vBoton}>
                    <Button style = {estiloBoton}
                      raised
                      icon={{name: 'close'}}
                      color="blue"
                      onPress={() => this.setModalVisibility(!this.state.visibility)}
                      title="SALIR"     
                    />
                  </View>
                </View>
              </ScrollView>
            </Modal>
        );
      }
}

 const styles =  StyleSheet.create({
    estiloModal: {
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        backgroundColor: '#DD763B',
        borderRadius: 8,
    },
    estiloImagen: {
        width: 280, 
        height: 250,
        alignSelf: 'center',
        marginVertical: 10,
        opacity: 0.9,
        borderRadius: 8
    },
    estiloTexto : {
        color: 'black',
        textAlign: 'justify',
        marginTop: -10,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        fontWeight : 'bold'
    },
    estiloContenedorTexto: {
        backgroundColor: 'white',
        opacity : 0.9,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 8,
        marginBottom: 30
    },
    estiloBoton: {
        paddingBottom: 10,
    
    },
    estiloTitulo: {
        fontSize : 26,
        fontWeight: "bold",
        textAlign: 'center',
        padding: 20,
        paddingTop: 0,
        color: 'white'
    },
    vBoton:{
      width : '50%',
      marginBottom: 20
    },
    estiloCentrado:{
      flexDirection: "row",
      justifyContent: "center"
    }
});

export default ModalsAppTlaco;