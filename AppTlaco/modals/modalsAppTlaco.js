import React, {Component, useState} from 'react';
import {View, Modal, Button, Text, StyleSheet} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { render } from 'react-dom';
//import {Button, Text} from 'react-native-elements';

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
        return (
          <View style={styles.mainContainer}>
            <Modal
              animationType={'slide'}
              transparent={false}
              visible={this.state.visibility}
            >
              <View style={styles.modalContainer}>
                <View>
                  <Text>I'm a simple Modal</Text>
                  <Button
                    color="#000"
                    onPress={() => this.setModalVisibility(!this.state.visibility)}
                    title="Hide Modal"
                  />
                </View>
              </View>
            </Modal>
    
            <Button
              color="#000"
              onPress={() => this.setModalVisibility(true)}
              title="Show Modal"
            />
          </View>
        );
      }

}

 const styles =  StyleSheet.create({
    modalStyle: {
        flex: 1,
        backgroundColor: 'blue'
    },
    containerStyle: {
        flex: 1,
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white'
    },
    buttonContainerStyle: {
        paddingBottom: 10
    }
});

 //MapStateToProps = ({modal, selectedValues, keys}) => ({modal, selectedValues, keys})

export default ModalsAppTlaco;