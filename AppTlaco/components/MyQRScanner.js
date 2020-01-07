import React from 'react';
import { StyleSheet, Modal } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

const MyQRScanner = props => {
    return (
        <Modal visible = {props.visible} animationType = "slide">
            <Text>HOLA</Text>
        </Modal>
    );
}

export default MyQRScanner;