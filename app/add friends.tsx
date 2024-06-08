import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AddFriends = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContacts, setSelectedContacts] = useState<any[]>([]);

  const contacts = [
    { id: '1', name: 'Alice', photo: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: '2', name: 'Bob', photo: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '3', name: 'Charlie', photo: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: '4', name: 'Diana', photo: 'https://randomuser.me/api/portraits/women/2.jpg' },
    // Add more contacts as needed
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addContact = (contact:any) => {
    if (!selectedContacts.find(c => c.id === contact.id)) {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const removeContact = (contact:any) => {
    setSelectedContacts(selectedContacts.filter(c => c.id !== contact.id));
  };

  const isContactSelected = (contact:any) => {
    return !!selectedContacts.find(c => c.id === contact.id);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for contacts..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      {/* Horizontal scroll view for selected contacts */}
      <ScrollView
        horizontal
        contentContainerStyle={styles.selectedContactsContainer}
        showsHorizontalScrollIndicator={false}
      >
        {selectedContacts.map(contact => (
          <View key={contact.id} style={styles.selectedContact}>
            <Image source={{ uri: contact.photo }} style={styles.photo} />
            <Text style={styles.contactName}>{contact.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Vertically scrollable list of all contacts */}
      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.contact}>
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <Text style={styles.contactName}>{item.name}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'white',
  },
  selectedContactsContainer: {
    position:'absolute',
    top: 20,
    paddingBottom: 0,
  },
  selectedContacts: {
    flexDirection: 'row',
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
    flex: 1,
    color: 'white',
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
});

export default AddFriends;
