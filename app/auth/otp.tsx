import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VerifyOTP = () => {
  const initialTimer = 5 * 60;
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(5 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const restartTimer = () => {
    setTimer(initialTimer);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleOTPChange = (index: number) => (value: string) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Enter the OTP that has been sent to +91 765*******
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={handleOTPChange(index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <Text style={styles.timer}>
        {timer === 0 ? 'Code expired' : `Expires in ${formatTime(timer)}`}
      </Text>
      <TouchableOpacity style={styles.button} onPress={restartTimer}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 75,
  },
  label: {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',    
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: '20%',
    height: 85,
    borderColor: '#5D00E0',
    borderWidth: 1,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 10,
  },
  timer: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
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
});

export default VerifyOTP;