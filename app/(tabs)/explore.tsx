// import React from 'react';
// import { StyleSheet, View, Text, Button, ScrollView,ImageBackground } from 'react-native';

// import { Collapsible } from '@/components/Collapsible';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function TabTwoScreen() {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Balance Display Container */}
//       <ImageBackground 
//         source={require('@/assets/images/Frame 14.png')} 
//         style={styles.balanceContainer} 
//         imageStyle={{ borderRadius: 12 }}
//       >
//       {/* <ThemedView style={styles.balanceContainer}>
//         <ThemedText type="title" style={styles.balanceTexthead}>
//           Available Balance
//         </ThemedText>
//         <ThemedText type="title" style={styles.balanceText}>
//         1307.00 rs
//         </ThemedText>
//         <View style={styles.button}>
//           <Button title="View Transactions" />
//         </View>
//       </ThemedView> */}
//       </ImageBackground>

//       {/* Collapsible Sections */}
//       <Collapsible title="Auto Documentation" >
//         <Text style={styles.balancetext}>To generate a proof document in PoolPay,
//            log in and navigate to the 'Transactions' section. Select the relevant loan 
//            transaction and click "Generate Proof." Review the details, then download or share the document. This will officially 
//           confirm the repayment of the loan, including all necessary details like names, loan amount, and repayment date.</Text>
//       </Collapsible>
//       <Collapsible title="Rewards" >
//         <Text style={styles.balancetext}>Reach milestone by making transactions through PoolPay and get exciting rewards</Text>
//       </Collapsible>
//       <Collapsible title="Billing Information" >
//         <Text style={styles.balancetext}>Eligibility and Account Security:

// Users must be at least 18 years old to create an account.
// Users are responsible for maintaining the confidentiality of their account credentials.
// Users are responsible for all activities that occur under their account.
// Usage of Services:

// Users must comply with all applicable laws and regulations while using PoolPay’s services like CoSpend, CoLoan, and CoInvest.
// PoolPay reserves the right to terminate or suspend accounts for misuse of the application, including fraudulent activities and violations of the terms of service.</Text>
//       </Collapsible>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: 'black',
//   },
//   balanceContainer: {
//     width:365,
//     height:192,
//     backgroundColor: '#6A00FF',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 24,
//     marginTop:30,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   button:{
//     marginTop: 12,
//     width: 150,
//     backgroundColor:'transparent',
//   },
//   balanceTexthead: {
//     fontSize: 15,
//     fontWeight: 'normal',
//     marginBottom: 12,
//     marginTop: 12,
//   },
//   balanceText: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   collapsible: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//     elevation: 4,
//     fontSize:50,
//   },
//   balancetext:{
//     color:'white',
//   }
// });
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

export default function TabTwoScreen() {
  // States for toggling FAQ answers
  const [showAutoDoc, setShowAutoDoc] = useState(false);
  const [showRewards, setShowRewards] = useState(false);
  const [showBilling, setShowBilling] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Balance Display Container */}
      <ImageBackground 
        source={require('@/assets/images/Frame 14.png')} 
        style={styles.balanceContainer} 
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.balanceTexthead}>
            Available Balance
          </Text>
          <Text style={styles.balanceText}>
            1307.00 rs
          </Text>
          <View style={styles.button}>
            <Button title="View Transactions" onPress={() => {}} color="#6A00FF" />
          </View>
        </View>
      </ImageBackground>

      {/* FAQ Sections */}
      <View style={styles.faqContainer}>
        <TouchableOpacity onPress={() => setShowAutoDoc(!showAutoDoc)}>
          <Text style={styles.faqTitle}>Auto Documentation</Text>
        </TouchableOpacity>
        {showAutoDoc && (
          <Text style={styles.faqText}>
            To generate a proof document in PoolPay, log in and navigate to the 'Transactions' section. Select the relevant loan 
            transaction and click "Generate Proof." Review the details, then download or share the document. This will officially 
            confirm the repayment of the loan, including all necessary details like names, loan amount, and repayment date.
          </Text>
        )}
        <View style={styles.separator} />

        <TouchableOpacity onPress={() => setShowRewards(!showRewards)}>
          <Text style={styles.faqTitle}>Rewards</Text>
        </TouchableOpacity>
        {showRewards && (
          <Text style={styles.faqText}>
            Reach milestones by making transactions through PoolPay and get exciting rewards.
          </Text>
        )}
        <View style={styles.separator} />

        <TouchableOpacity onPress={() => setShowBilling(!showBilling)}>
          <Text style={styles.faqTitle}>Billing Information</Text>
        </TouchableOpacity>
        {showBilling && (
          <Text style={styles.faqText}>
            Eligibility and Account Security:
            Users must be at least 18 years old to create an account.
            Users are responsible for maintaining the confidentiality of their account credentials.
            Users are responsible for all activities that occur under their account.
            Usage of Services:
            Users must comply with all applicable laws and regulations while using PoolPay’s services like CoSpend, CoLoan, and CoInvest.
            PoolPay reserves the right to terminate or suspend accounts for misuse of the application, including fraudulent activities and violations of the terms of service.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'black',
  },
  balanceContainer: {
    width: '100%',
    height: 192,
    borderRadius: 12,
    marginBottom: 24,
    marginTop: 30,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'flex-start', // Align items to the left
  },
  button: {
    marginTop: 12,
    width: 135,
  },
  balanceTexthead: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
  },
  balanceText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  faqContainer: {
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  faqItem: {
    marginBottom: 16,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  faqText: {
    fontSize: 14,
    color: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
  },
});
