import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';


const PeopleSelectedPage = () => {
  const {selectedContacts}=useLocalSearchParams();
  const [totalAmount, setTotalAmount] = useState(0);

  
    const contacts=[{
        name:'Ravi ⚡',
        phoneNumber:8919774630
    },{
        name:'HariCharan CSE',
        phoneNumber:7842657327
    },]


  const totalEnteredAmount = contacts.reduce((total, contact) => total + (contact.amount || 0), 0);

  const handleSendRequests = () => {
    // Handle the click on the "Send Requests" button.
    // This is a placeholder and should be replaced with actual code.
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: 'white', fontWeight: '500', fontSize: 20 }}>People on the tab</Text>
      {contacts.map((contact:any, index) => (
        <View key={index}>
          <Text style={{color:"white",fontSize:30}}>{contact.name}</Text>
          <TextInput
            value={contact.amount?.toString()}
            // onChangeText={(value) => handleAmountChange(index, value)}
            keyboardType="numeric"
          />
        </View>
      ))}
      <Text style={{color:"white",fontSize:30}}>Total amount: {totalAmount}</Text>
      {/* <Text style={{color:"white",fontSize:30}}>Edit Price</Text> */}
      <Button
        title="Send Requests"
        onPress={handleSendRequests}
        disabled={totalAmount !== totalEnteredAmount}
      />
    </View>
  );
};

export default PeopleSelectedPage;