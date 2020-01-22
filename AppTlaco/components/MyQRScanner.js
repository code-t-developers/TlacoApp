import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Botones from '../components/Botones';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationActions } from 'react-navigation';

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
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        props.navigation.navigate({routeName : 'Monumento', action: props.navigation.goBack(null)});
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    
    return (
        <View style = {styles.container}>
            <View style = {styles.textContainer}>
                <Text 
                    style = {{fontSize: 16, fontWeight: 'bold'}}
                >
                    ¡ESCANEA EL CÓDIGO QR DEL MONUMENTO!
                </Text>
                <Text>Y CONOCE MÁS SOBRE ÉL</Text>
            </View>

            <View>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFill}
                />
                <TouchableOpacity style = {styles.scannerContainer}></TouchableOpacity>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },

    textContainer : {
        alignItems: 'center', 
        marginTop: 40, 
      //  backgroundColor: 'orange',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 8
    },

    viewScanner : {
        borderWidth: 0.3,
        borderColor: 'yellow',
        width: '50%',
        height: '10%',
        alignSelf: 'center',
        
    },

    scannerContainer : {
        width : screenWidth,
        height : screenHeight,
    },

    buttonContainer : {
        alignItems: 'center',
        marginTop: 10
    }
});
export default MyQRScanner;