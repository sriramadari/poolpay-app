import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { Link } from 'expo-router';
import { RouteProp } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';


type PaymentScreenRouteProp = RouteProp<
  { Payment: { scannedNumber: number } }, // Define the type of parameters here
  'Payment'
>;

type Props = {
  route: PaymentScreenRouteProp;
};

export default function PaymentScreen({route}:Props) {
  const [inputLength, setInputLength] = useState(0);
  const [isBillGenerated, setIsBillGenerated] = useState(false);
  const params = useLocalSearchParams()
 
  const { profileName = "Randyorton" } = useLocalSearchParams();
const scannedNumber = profileName;
  
  return (
    <LinearGradient colors={['#0D0B0F', '#150032']} style={styles.container}>
      <View style={styles.topContainer}>
    
        <View style={styles.contentContainer}>
          <Text style={styles.payingTo}>Paying to</Text>
          <Image style={styles.profileImage} source={require('@/assets/images/demo.jpeg')} />
          <Text style={styles.profileName}>{scannedNumber}</Text>
         
          <View style={styles.inputContainer}>
  <Text style={styles.currencySymbol}>₹</Text>
  <TextInput
    style={styles.input}
    placeholderTextColor="#525252"
    onChangeText={(text) => setInputLength(text.length)}
    textAlign='center' // This will center the text inside the input
  />
</View>

        </View>
      </View>
      
      <View style={styles.bottomContainer}>
      {/* <CheckBox
  title='Generate a bill'
  checked={isBillGenerated}
  onPress={() => setIsBillGenerated(!isBillGenerated)}
  textStyle={styles.checkboxText}
  containerStyle={styles.checkboxContainer}
  checkedColor='white'
  uncheckedColor='white'
  checkedIcon={<Ionicons name="checkbox" size={24} color="white" />}
  uncheckedIcon={<Ionicons name="square-outline" size={24} color="white" />}
/> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addFriendsButton}>
            <Link href="./add friends" asChild>
              <Pressable>
                <Text style={styles.addFriendsButtonText}>Add Friends</Text>
                </Pressable>
            </Link>
          </TouchableOpacity>
        </View>
       
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
  },
  backButton: {
    backgroundColor: '#6A00FF',
    borderRadius: 50,
    padding: 5,
  },
  contentContainer: {
    alignItems: 'center',
  },
  payingTo: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
    paddingBottom: 10,
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
    
  },
  profileName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  
  currencySymbol: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    borderBottomColor: '#6A00FF',
    borderBottomWidth: 1,
    width: '35%', // Constant width
    marginBottom: 10,
  },
  input: {
    height: 57,
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    width: '60%', // Adjust this as needed
  },
  checkboxContainer: {
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  checkboxText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: 36,
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