import React, { useRef, useEffect, useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, Text, FlatList, Pressable, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Link } from 'expo-router';
import * as Contacts from "expo-contacts";

type PhoneNumber = {
  number: string;
};

type ContactItem = {
  name: string;
  phoneNumbers?: PhoneNumber[];
};

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [contacts, setContacts] = useState<any[]>([]);
  const carouselImages = [
    require('@/assets/images/image1.png'),
    require('@/assets/images/image2.png'),
    require('@/assets/images/image3.png'),
    require('@/assets/images/image4.png')
  ];

  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setContacts(data);
          console.log(data[0]);
        }
      }
    })();
  }, []);

  useEffect(() => {
    let position = 0;
    const scrollInterval = setInterval(() => {
      if (scrollViewRef.current) {
        // Move to the next image position
        position = (position + 1) % carouselImages.length;
        // Center each image in the ScrollView
        const offsetX = position * windowWidth;
        scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [carouselImages.length, windowWidth]);

  const keyExtractor = (item: any) => item?.id?.toString();

  const renderContact = ({ item }: { item: ContactItem }) => (
    <View style={styles.contactItem}>
      <Ionicons name="person-circle-outline" size={24} color="white" style={styles.contactIcon} />
      <View style={styles.contactTextContainer}>
        <Text style={styles.contactName}>{item.name}</Text>
        {item.phoneNumbers && item.phoneNumbers.map((phone: PhoneNumber, index: number) => (
          <Text key={index} style={styles.contactPhoneNumber}>{phone.number}</Text>
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <ParallaxScrollView
        headerImage={
          <View style={styles.header}>
            <Image
              source={require('@/assets/images/logo.png')}
              style={styles.reactLogo}
            />
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                placeholderTextColor="#D9D9D9"
              />
              <Ionicons name="search-outline" size={24} color="white" style={styles.searchIcon} />
            </View>
            <TouchableOpacity style={styles.bellIcon}>
              <Ionicons name="notifications-sharp" size={24} color="white" />
            </TouchableOpacity>
          </View>
        }>
      </ParallaxScrollView>

      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {carouselImages.map((image, index) => (
            <View key={index} style={{ width: windowWidth, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={image}
                style={[styles.carouselImage, { width: windowWidth - 20 }]} // Reduced width for margin
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Start your Transaction</Text>
        <View style={styles.headingLine} />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Link href="/co-spend" asChild>
              <Pressable>
                <Image
                  source={require('@/assets/images/Transaction.png')}
                  style={styles.buttonImage}
                />
              </Pressable>
            </Link>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Co Spend</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Link href="/co-loan" asChild>
              <Pressable>
                <Image
                  source={require('@/assets/images/rupee.png')}
                  style={styles.buttonImage}
                />
              </Pressable>
            </Link>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Co Loan</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Link href="/co-invest" asChild>
              <Pressable>
                <Image
                  source={require('@/assets/images/investment.png')}
                  style={styles.buttonImage}
                />
              </Pressable>
            </Link>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Co Invest</Text>
        </View>
      </View>

      <View style={styles.contactsSection}>
        <View style={styles.sheadingContainer}>
          <Text style={styles.sheading}>Your Contacts</Text>
          <View style={styles.sheadingLine} />
        </View>
        <FlatList
          data={contacts}
          renderItem={renderContact}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contactsContainer}
          ListEmptyComponent={<Text style={styles.noContactsText}>No contacts available</Text>}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  reactLogo: {
    height: 40,
    width: 40,
    marginRight: 8,
  },
  searchContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },
  searchBar: {
    height: 40,
    backgroundColor: '#8a8a8a',
    borderRadius: 20,
    paddingHorizontal: 12,
    fontSize: 15,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
  },
  bellIcon: {},
  carouselContainer: {
    marginTop: 10, // Adjust this value as needed
  },
  carousel: {
    flexDirection: 'row',
  },
  carouselImage: {
    height: 250,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  headingContainer: {
    marginTop: 20, // Adjust as needed to space from the carousel
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  heading: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  headingLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginHorizontal: 16,
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
  },
  buttonImage: {
    height: 60,
    width: 60,
  },
  contactsSection: {
    marginTop: 20, // Adjust as needed
  },
  sheadingContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  sheading: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  sheadingLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
    marginLeft: 8,
  },
  contactsContainer: {
    position: 'absolute',
    top: 600, // Adjust as needed to fit below other elements
    flex: 1,
    width: '100%',
    padding: 16,
    marginTop:15,
  },
  contactItem: {
    backgroundColor: '#1a1a1a',
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  contactIcon: {
    marginRight: 12,
  },
  contactTextContainer: {
    flex: 1,
  },
  contactName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactPhoneNumber: {
    color: '#ccc',
    fontSize: 14,
  },
  noContactsText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});
