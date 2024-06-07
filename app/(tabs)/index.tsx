import React from 'react';
import { View, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
      <ScrollView horizontal={true} style={styles.carousel}>
        <Image
          source={require('@/assets/images/image1.png')}
          style={styles.carouselImage}
        />
        <Image
          source={require('@/assets/images/image2.png')}
          style={styles.carouselImage}
        />
        <Image
          source={require('@/assets/images/image3.png')}
          style={styles.carouselImage}
        />
        <Image
          source={require('@/assets/images/image4.png')}
          style={styles.carouselImage}
        />
      </ScrollView>
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
      <View style={styles.sheadingContainer}>
        <Text style={styles.sheading}>Your Contacts</Text>
        <View style={styles.sheadingLine} />
      </View>
    </View>
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
    fontSize: 15, // Space for the icon
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
  },
  bellIcon: {},
  carousel: {
    position: 'absolute',
    top: 100,
    marginTop: 10,
    marginLeft: 7,
    flexDirection: 'row',
  },
  carouselImage: {
    width: 360,
    height: 250,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  headingContainer: {
    position: 'absolute',
    top: 100,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 300,
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
    position: 'absolute',
    top: 420,
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
  sheadingContainer: {
    position: 'absolute',
    top: 590,
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  sheading: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  sheadingLine: {
    flex: 1,
    height: 1,
    marginTop:10,
    backgroundColor: '#fff',
    marginLeft: 8,
  },
});
