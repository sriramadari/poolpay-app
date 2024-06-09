import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Contacts from "expo-contacts";

const AddFriends = () => {
  const navigation = useNavigation();

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
            <View style={styles.contactDetails}>
              <Image source={{ uri: item.imageAvailable ? item.image.uri : 'https://via.placeholder.com/60' }} style={styles.photo} />
              <Text style={styles.contactName}>{item.name}</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.addButton,
                isContactSelected(item) && styles.removeButton,
              ]}
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
        contentContainerStyle={[styles.contactsList, { paddingBottom: 20 }]}
      />

      <TouchableOpacity style={styles.nextButton}>
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
    padding:15,
    backgroundColor:'#272727',
    paddingLeft:0,
    justifyContent:'space-between',
  },
  selectedContact: {
    flexDirection: 'row',
    alignItems:'center',
    paddingBottom:10,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  contactDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 10,
  },
  contactName: {
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#6A00FF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  removeButton: {
    backgroundColor: 'red',
  },
  addButtonText: {
    color: '#fff',
  },
  contactsList: {
    flexGrow: 0,
  },
  nextButton: {
    backgroundColor: '#6A00FF',
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
