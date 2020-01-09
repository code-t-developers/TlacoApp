import React, {useState} from 'react';
import { StyleSheet, Modal, Text } from 'react-native';
import Botones from '../components/Botones';

const MyQRScanner = props => {
    const [modalState, setModalState] = useState(false);

    const getModalState = () => {
        modalState = props.visible;
    }
    return (
        <Modal visible = {props.visible} animationType = "slide">
            <Text>HOLA</Text>
            <Botones title = "CANCELAR" openModal = {() => setModalState(false)}/>
        </Modal>
    );
}

export default MyQRScanner;