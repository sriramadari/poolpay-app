import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabTwoScreen() {
  return (
    <LinearGradient colors={['#0D0B0F', '#150032']} style={styles.container}>
      <Image source={require('@/assets/images/demo-doctor.jpg')} style={styles.profileImage} />
      <Text style={styles.profileName}>Max Verstappen</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonTransactions}>
          <Text style={styles.buttonTransactionsText}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDueLoans}>
          <Text style={styles.buttonDueLoansText}>Due Loans</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the start of the flex container
    paddingTop: 150, // Add some padding at the top
  },
  profileImage: {
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
  },
  profileName: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonTransactions: {
    backgroundColor: 'white',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    width: 130,

  },
  buttonTransactionsText: {
    color: '#6A00FF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  buttonDueLoans: {
    backgroundColor: '#6A00FF',
    padding: 10,
    borderRadius: 10,
    width: 130,
  },
  buttonDueLoansText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});