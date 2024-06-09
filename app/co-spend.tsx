import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
const Cospend = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Co Spend</Text>
      <Text style={styles.subtext}>
        Request money from your friends and involve them in your transaction.
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
          <Text>
  <Link href="/qr_code" asChild>
    <Pressable>
      <Image
        source={require('@/assets/images/qr code (1).png')}
        style={styles.buttonImage}
      />
    </Pressable>
  </Link>
</Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Scan QR</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
          <Text>
          <Link href="/payment" asChild>
              <Pressable>
                <Image
                  source={require('@/assets/images/Phone.png')}
                  style={styles.buttonImage}
                />
              </Pressable>
            </Link>
            </Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Pay Through Number</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Optional: Set a background color for contrast
  },
  heading: {
    position: 'absolute',
    top: '20%',
    color: '#9747FF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtext: {
    position: 'absolute',
    top: '30%',
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    position: 'absolute',
    top: '50%', // Starts from the middle of the page
    borderTopLeftRadius:170,
    borderTopRightRadius:170,
    width: '100%',
    height: '50%',
    backgroundColor: '#400099', // Dark violet background
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: '#6A00FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonImage: {
    height: 60,
    width: 60,
  },
});

export default Cospend;
