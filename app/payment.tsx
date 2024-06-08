import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function PaymentScreen() {
  return (
    <LinearGradient colors={['#0D0B0F', '#150032']} style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.payingTo}>Paying to</Text>
      <Image style={styles.profileImage} source={require('@/assets/images/demo.jpeg')} />
      <Text style={styles.profileName}>Receiver's Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        placeholderTextColor="#525252"
      />
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxText}>Generate a bill</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addFriendsButton}>
          <Text style={styles.addFriendsButtonText}>Add Friends</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonTextContainer}>
        <Text style={styles.payAloneText}>Pay alone</Text>
        <Text style={styles.bringFriendsText}>Bring your friends too</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    backgroundColor: '#6A00FF',
    borderRadius: 50,
    padding: 10,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  payingTo: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'center',
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignSelf: 'center',
  },
  profileName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'center',
  },
  input: {
    height: 57,
    borderColor: '#6A00FF',
    borderWidth: 1,
    marginBottom: 10,
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    alignSelf: 'center',
    width: '90%',
  },
  checkboxContainer: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  payButton: {
    backgroundColor: '#6A00FF',
    padding: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  addFriendsButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  addFriendsButtonText: {
    color: '#6A00FF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  payAloneText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  bringFriendsText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});