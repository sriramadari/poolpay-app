import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {useRouter} from 'expo-router';

type RootStackParamList = {
  payment: { profileName: string };
  // other screens go here
};

export default function QRCodeScannerScreen() {
const router= useRouter();
  const [scannedNumber, setScannedNumber] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
    setScannedNumber(data);
  };

  const handleProceed = () => {
  if (scannedNumber) {
    console.log(scannedNumber)
    router.push({ pathname: "payment", params:{ profileName: scannedNumber } });
    // navigation.navigate('payment', { profileName: scannedNumber });
  }
}

  return (
    <LinearGradient colors={['#0D0B0F', '#150032']} style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.scanner}
      />
      <Text style={styles.text}>Place the code inside the frame</Text>
      {scannedNumber && <Text style={styles.text}>{scannedNumber}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanner: {
    width: 236,
    height: 236,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    marginTop: 16,
    paddingBottom: 16,
  },
  button: {
    height: 57,
    backgroundColor: '#6A00FF',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});