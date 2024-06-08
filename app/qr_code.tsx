import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useRouter } from 'expo-router';

type RootStackParamList = {
  payment: { profileName: string };
  // other screens go here
};

export default function QRCodeScannerScreen() {
  const router = useRouter();
  const [scannedNumber, setScannedNumber] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
    setScannedNumber(data);
  };

  const handleProceed = () => {
    if (scannedNumber) {
      console.log(scannedNumber);
      router.push({ pathname: "payment", params: { profileName: scannedNumber } });
      // navigation.navigate('payment', { profileName: scannedNumber });
    }
  }

  return (
    <LinearGradient colors={['#0D0B0F', '#150032']} style={styles.container}>
      <View style={styles.scannerContainer}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={styles.scanner}
        />
        <View style={styles.overlayTop} />
        <View style={styles.overlayBottom} />
        <View style={styles.overlayLeft} />
        <View style={styles.overlayRight} />
      </View>
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
    backgroundColor: '#0D0B0F',
  },
  scannerContainer: {
    position: 'relative',
    width: 236,
    height: 236,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanner: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  overlayTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlayLeft: {
    position: 'absolute',
    left: 0,
    width: 20,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlayRight: {
    position: 'absolute',
    right: 0,
    width: 20,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 16,
    paddingBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

