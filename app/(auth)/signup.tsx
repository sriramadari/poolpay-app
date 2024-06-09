import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useRouter} from 'expo-router';
export default function App() {
  const router = useRouter();
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
  <Text style={styles.label}>Create Password</Text>
  <TextInput
    style={styles.input}
    placeholder="Enter password"
    placeholderTextColor="#525252"
    secureTextEntry
  />
</View>
<View style={styles.inputContainer}>
  <Text style={styles.label}>Confirm Password</Text>
  <TextInput
    style={styles.input}
    placeholder="Enter password again"
    placeholderTextColor="#525252"
    secureTextEntry
  />
</View>
      <TouchableOpacity 
      style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.newUser}>
        <Text style={styles.newUserText}>Already Have an account? </Text>
         <TouchableOpacity onPress={
            ()=>{
              console.log('login')
              router.push('/login')
            }
          } > 
          <Text style={styles.createAccount}>Log in</Text> 
          </TouchableOpacity>
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
    fontFamily: 'SpaceMono',
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