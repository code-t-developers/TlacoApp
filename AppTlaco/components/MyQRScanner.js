import React, {useState, useEffect} from 'react';
import { StyleSheet, Modal, Text, View, Dimensions } from 'react-native';
import Botones from '../components/Botones';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
// scanLine = 90;

const MyQRScanner = props => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scanLine, setScanLine] = useState(0);

    const moveScanLine = () => {
        let aux = 90;
       // setScanLine(90);

       /*
        while (!scanned){
            setScanLine(aux);
            aux += 10;

            if(aux > 451 )
                aux = 90;
            
            console.log("scanLine, aux");
        }

        console.log("hola");
        */
        
    }

    useEffect(() => {
        (async () => {
          const { status } = await Permissions.askAsync(Permissions.CAMERA);
          setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    
    return (
        <Modal visible = {props.visible} animationType = "slide" onShow = {moveScanLine}>
            <View style = {styles.textContainer}>
                <Text 
                    style = {{fontSize: 16, fontWeight: 'bold'}}
                >
                    ¡ESCANEA EL CÓDIGO QR DEL MONUMENTO!
                </Text>
                <Text>Y CONOCE MÁS SOBRE ÉL</Text>
            </View>
            <View style = {styles.viewScanner}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFill}
                />
                <View
                    
                    style = {{
                        height: 1,
                        width: '100%',
                        backgroundColor: 'red',
                        marginTop: scanLine
                    }}
                />
                <Text style = {styles.scannerContainer}></Text>
                
            </View>

            <View style = {styles.buttonContainer}>
                <Botones title = "CANCELAR" doThis = {props.onCancel} myIcon = "md-close"/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    textContainer : {
        alignItems: 'center', 
        marginTop: 10, 
        backgroundColor: 'orange',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 8
    },

    viewScanner : {
        marginTop: 20, 
        borderWidth: 5.25, 
        width: '88.194%', 
        height: '77.601%', 
        alignSelf: 'center', 
        borderRadius: 8
    },

    scannerContainer : {
        width : '90%',
        height : '80%',
        maxWidth : '90%',
        alignSelf: 'center',
    },

    buttonContainer : {
        alignItems: 'center',
        marginTop: 10
    }
});
export default MyQRScanner;