import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Add this import
import Navbar from "../components/UI/Navbar";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const ManagementOptionsScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const managementOptions = [
    { 
      title: 'Enquiries & Follow-ups 📞',
      icon: 'phone-in-talk',
      color: '#2196F3',
      screen: 'Enquiries.js' // Add screen name
    },
    { 
      title: 'Feedback Management 📝',
      icon: 'feedback',
      color: '#4CAF50',
      screen: 'FeedbackManagement' // Add screen name
    },
    { 
      title: 'Communication (Bulk Messages) 📢',
      icon: 'message',
      color: '#007AFF',
      screen: 'BulkMessages'
    },
    { 
      title: 'Video Management 🎥',
      icon: 'video-library',
      color: '#E91E63'
    },
    { 
      title: 'Online Classes Management 🖥',
      icon: 'class',
      color: '#673AB7'
    },
    { 
      title: 'Healthcare Tie-ups 🏥',
      icon: 'local-hospital',
      color: '#009688'
    },
    { 
      title: 'Promotional Activities 📣',
      icon: 'campaign',
      color: '#FF5722'
    },
  ];
    // Add screen names for all other options...
  

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.sectionTitle}>Management Options</Text>
        
        <FlatList
          data={managementOptions}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card}
              onPress={() => handlePress(item.screen)} // Add onPress handler
            >
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <MaterialIcons name={item.icon} size={24} color="white" />
              </View>
              <Text style={styles.optionText}>{item.title}</Text>
              <MaterialIcons name="chevron-right" size={24} color="#666" />
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      {/* Navbar remains same */}
      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
    marginTop: 48
  },
  contentContainer: {
    paddingBottom: windowHeight * 0.12,
  },
  navbar: {
    backgroundColor: "#66c9de",
    width: "100%",
    height: windowHeight * 0.08,
    position: 'absolute',
    bottom: 0,
    paddingBottom: windowHeight * 0.02,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    borderRadius: 8,
    padding: 10,
    marginRight: 16,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '500',
    marginRight: 8,
  },
});

export default ManagementOptionsScreen;