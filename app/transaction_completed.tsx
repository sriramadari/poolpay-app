import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const TransactionCompleted = () => {
  return (
    <View style={styles.container}>
      
      <LinearGradient
        style={styles.gradient}
        colors={['#000000', '#400099']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.circle}>
          <FontAwesome name="check" size={80} color="#FFFFFF" />
        </View>
        <Text style={styles.text}>Transaction Completed</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 206,
    height: 206,
    borderRadius: 103,
    backgroundColor: '#400099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '500',
    marginTop: 20,
  },
});

export default TransactionCompleted;