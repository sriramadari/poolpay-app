import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import * as Contacts from "expo-contacts";
import { useRouter } from 'expo-router';

const AddFriends = () => {
  const navigation = useNavigation(); // Get the navigation object
const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContacts, setSelectedContacts] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.Image],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addContact = (contact: any) => {
    if (!selectedContacts.find(c => c.id === contact.id)) {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const removeContact = (contact: any) => {
    setSelectedContacts(selectedContacts.filter(c => c.id !== contact.id));
  };

  const isContactSelected = (contact: any) => {
    return !!selectedContacts.find(c => c.id === contact.id);
  };
  const handleNext = () => {
    if (selectedContacts.length === 0) {
      Alert.alert("Error", "Please select at least one contact.");
      return;
    }
    router.push({pathname:'peopleselectedpage', params:{ selectedContacts:selectedContacts }});
  };
  
  // ...
  
  <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
    <Text style={styles.nextButtonText}>Next</Text>
  </TouchableOpacity>

  // const handleNext = () => {
  //   if (selectedContacts.length === 0) {
  //     Alert.alert("Error", "Please select at least one contact.");
  //     return;
  //   }
  //   navigation.navigate('NextPage', { selectedContacts });
  // };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for contacts..."
        placeholderTextColor="#fff"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <ScrollView
        horizontal
        contentContainerStyle={styles.selectedContactsContainer}
        showsHorizontalScrollIndicator={false}
      >
        {selectedContacts.map(contact => (
          <View key={contact.id} style={styles.selectedContact}>
            <Image source={{ uri: contact.imageAvailable ? contact.image.uri : 'https://via.placeholder.com/60' }} style={styles.photo} />
            <Text style={styles.contactName}>{contact.name}</Text>
          </View>
        ))}
      </ScrollView>

      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.contact}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: item.imageAvailable ? item.image.uri : 'https://via.placeholder.com/60' }} style={styles.photo} />
              <Text style={styles.contactName}>{item.name}</Text>
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => {
                isContactSelected(item) ? removeContact(item) : addContact(item);
              }}
            >
              <Text style={styles.addButtonText}>
                {isContactSelected(item) ? 'Remove' : 'Add'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.contactsList}
      />

<TouchableOpacity style={styles.nextButton} onPress={handleNext}>
  <Text style={styles.nextButtonText}>Next</Text>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#fff',
  },
  selectedContactsContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  selectedContact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  contactName: {
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
  },
  contactsList: {
    flexGrow: 1,
  },
  nextButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddFriends;
