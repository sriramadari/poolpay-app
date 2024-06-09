import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CoLoan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Co Loan</Text>
      <Text style={styles.subtext}>
      You can submit a loan request globally and also request loans from friends 
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
              <Image
                source={require('@/assets/images/friends.png')}
                style={styles.buttonImage}
              />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Request Friends</Text>
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
    fontSize: 18,
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

export default CoLoan;
