import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class WebComponent extends Component {
  render() {
    return (
        <WebView source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}} />
    );
  }
}

export default WebComponent;