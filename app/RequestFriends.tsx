// import React, { useState } from 'react';
// import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// export default function Apply() {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date:any) => {
//     const today = new Date();
//     // Set time to 00:00:00 to compare only dates
//     today.setHours(0, 0, 0, 0);
//     if (date < today) {
//       setErrorMessage('Due date cannot be before today.');
//     } else {
//       setSelectedDate(date);
//       setErrorMessage('');
//     }
//     hideDatePicker();
//   };

//   const formatDate = (date:any) => {
//     if (!date) return '';
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString(undefined, options);
//   };

//   return (
//     <LinearGradient colors={['#0D0B0F', '#150032']} style={styles.container}>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Phone number</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter phone number"
//           placeholderTextColor="#525252"
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Enter Amount</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Amount"
//           placeholderTextColor="#525252"
//           secureTextEntry
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Due Date</Text>
//         <TouchableOpacity onPress={showDatePicker} style={styles.datePickerButton}>
//           <Text style={styles.datePickerText}>
//             {selectedDate ? formatDate(selectedDate) : 'Select Due Date'}
//           </Text>
//         </TouchableOpacity>
//         {errorMessage ? (
//           <Text style={styles.errorText}>{errorMessage}</Text>
//         ) : (
//           selectedDate && (
//             <Text style={styles.selectedDateText}>
//               Selected Date: {formatDate(selectedDate)}
//             </Text>
//           )
//         )}
//       </View>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   label: {
//     color: '#fff',
//     fontFamily: 'Inter',
//     fontSize: 16,
//     marginBottom: 8,
//     fontWeight: 'bold',    
//   },
//   inputContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     alignItems: 'flex-start',
//     marginBottom: 15,
//   },
//   input: {
//     height: 57,
//     borderColor: '#5D00E0',
//     borderWidth: 1,
//     marginBottom: 10,
//     color: '#fff',
//     paddingHorizontal: 15,
//     borderRadius: 10,
//     width: '100%',
//   },
//   datePickerButton: {
//     height: 57,
//     justifyContent: 'center',
//     borderColor: '#5D00E0',
//     borderWidth: 1,
//     borderRadius: 10,
//     width: '100%',
//     paddingHorizontal: 15,
//   },
//   datePickerText: {
//     color: '#fff',
//   },
//   selectedDateText: {
//     color: '#fff',
//     marginTop: 10,
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 10,
//   },
//   button: {
//     height: 57,
//     backgroundColor: '#6A00FF',
//     padding: 10,
//     alignItems: 'center',
//     marginBottom: 10,
//     borderRadius: 10,
//     width: '90%',
//     alignSelf: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
