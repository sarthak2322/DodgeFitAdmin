import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Navbar from "../components/UI/Navbar";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const EnquiriesFollowUpScreen = () => {
  // Mock data - replace with actual data from your app
  const enquiries = [
    { 
      id: '1',
      name: 'John Doe',
      type: 'Walk-in',
      date: '2024-03-25',
      status: 'New',
      followUpDate: '2024-03-27'
    },
    { 
      id: '2',
      name: 'Sarah Smith',
      type: 'Phone Call',
      date: '2024-03-24',
      status: 'In Progress',
      followUpDate: '2024-03-26'
    },
    { 
      id: '3',
      name: 'Mike Johnson',
      type: 'Email',
      date: '2024-03-23',
      status: 'Completed',
      followUpDate: '2024-03-25'
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.sectionTitle}>Enquiries & Follow-ups</Text>

        {/* Quick Actions Row */}
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity style={styles.quickAction}>
            <MaterialIcons name="person-add" size={24} color="#007AFF" />
            <Text style={styles.quickActionText}>New Walk-in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <MaterialIcons name="schedule" size={24} color="#007AFF" />
            <Text style={styles.quickActionText}>Schedule Call</Text>
          </TouchableOpacity>
        </View>

        {/* Enquiries List */}
        <FlatList
          data={enquiries}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.enquiryCard}>
              <View style={styles.enquiryHeader}>
                <Text style={styles.enquiryName}>{item.name}</Text>
                <View style={[styles.statusBadge, 
                  { backgroundColor: 
                    item.status === 'New' ? '#FFC107' :
                    item.status === 'In Progress' ? '#2196F3' : '#4CAF50'
                  }]}>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </View>
              
              <View style={styles.enquiryDetails}>
                <View style={styles.detailRow}>
                  <MaterialIcons name="category" size={18} color="#666" />
                  <Text style={styles.detailText}>{item.type}</Text>
                </View>
                <View style={styles.detailRow}>
                  <MaterialIcons name="event" size={18} color="#666" />
                  <Text style={styles.detailText}>{item.date}</Text>
                </View>
                <View style={styles.detailRow}>
                  <MaterialIcons name="follow-the-signs" size={18} color="#666" />
                  <Text style={styles.detailText}>Follow-up: {item.followUpDate}</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>View Details</Text>
                <MaterialIcons name="chevron-right" size={20} color="#007AFF" />
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>

      {/* Add New Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <MaterialIcons name="add" size={28} color="white" />
      </TouchableOpacity>

      {/* Fixed Bottom Navbar */}
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
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickAction: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionText: {
    color: '#007AFF',
    fontWeight: '500',
    marginTop: 8,
  },
  enquiryCard: {
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
  enquiryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  enquiryName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  enquiryDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  detailText: {
    color: '#666',
    marginLeft: 8,
    fontSize: 14,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  actionButtonText: {
    color: '#007AFF',
    fontWeight: '500',
    marginRight: 4,
  },
  floatingButton: {
    position: 'absolute',
    bottom: windowHeight * 0.1,
    right: 20,
    backgroundColor: '#007AFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default EnquiriesFollowUpScreen;