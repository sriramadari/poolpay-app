import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Balance Display Container */}
      <ThemedView style={styles.balanceContainer}>
        <ThemedText type="title" style={styles.balanceTexthead}>
          Available Balance
        </ThemedText>
        <ThemedText type="title" style={styles.balanceText}>
        1307.00 rs
        </ThemedText>
        <View style={styles.button}>
          <Button title="View Transactions" />
        </View>
      </ThemedView>

      {/* Collapsible Sections */}
      <Collapsible title="Recent Activities" >
        <Text style={styles.balancetext}>Transaction 1: $50.00</Text>
        <Text style={styles.balancetext}>Transaction 2: $30.00</Text>
      </Collapsible>
      <Collapsible title="Investment Details" >
        <Text style={styles.balancetext}>Investment 1: $200.00</Text>
        <Text style={styles.balancetext}>Investment 2: $300.00</Text>
      </Collapsible>
      <Collapsible title="Billing Information" >
        <Text style={styles.balancetext}>Bill 1: $100.00</Text>
        <Text style={styles.balancetext}>Bill 2: $150.00</Text>
      </Collapsible>
      <Collapsible title="Settings">
        <Text style={styles.balancetext}>Option 1: Enabled</Text>
        <Text style={styles.balancetext}>Option 2: Disabled</Text>
      </Collapsible>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'black',
  },
  balanceContainer: {
    backgroundColor: '#6A00FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    marginTop:30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  button:{
    marginTop: 12,
    width: 150,
    backgroundColor:'transparent',
  },
  balanceTexthead: {
    fontSize: 15,
    fontWeight: 'normal',
    marginBottom: 12,
    marginTop: 12,
  },
  balanceText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  collapsible: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    fontSize:50,
  },
  balancetext:{
    color:'white',
  }
});
