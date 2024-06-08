import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#0D0B0F', '#150032']} style={styles.container}>
     <View style={styles.inputContainer}>
  <Text style={styles.label}>Phone number</Text>
  <TextInput
    style={styles.input}
    placeholder="Enter phone number"
    placeholderTextColor="#525252"
  />
</View>
<View style={styles.inputContainer}>
  <Text style={styles.label}>Password</Text>
  <TextInput
    style={styles.input}
    placeholder="Enter password"
    placeholderTextColor="#525252"
    secureTextEntry
  />
</View>
      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password? </Text>
        <Text style={styles.resetPassword}>Reset Password</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.newUser}>
        <Text style={styles.newUserText}>New User? </Text>
        <Text style={styles.createAccount}>Create new account</Text>
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
  label: {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',    
  },
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  input: {
    height: 57,
    borderColor: '#5D00E0',
    borderWidth: 1,
    marginBottom: 10,
    color: '#fff',
    paddingHorizontal: 15, // Add padding to the text fields
    borderRadius: 10,
    width: '100%', // Make the text fields take up the full width of the container
  },
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#fff',
  },
  resetPassword: {
    color: '#6A00FF',
  },
  button: {
    height: 57,
    backgroundColor: '#6A00FF',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  newUser: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  newUserText: {
    color: '#fff',
  },
  createAccount: {
    color: '#6A00FF',
  },
});