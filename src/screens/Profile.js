import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Navbar from "../components/UI/Navbar";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const PaymentsSubscriptionsScreen = () => {
  // Sports club mock data
  const membershipPlans = {
    plan: 'Gold Membership',
    price: '$99/month',
    activeMembers: 234,
    nextBilling: 'April 1, 2024'
  };

  const memberPayments = [
    { id: '1', date: '2024-03-25', member: 'Sandeep', amount: '$99', status: 'Paid' },
    { id: '2', date: '2024-03-24', member: 'Sarthak', amount: '$99', status: 'Pending' },
    { id: '3', date: '2024-03-23', member: 'Anurag', amount: '$150', status: 'Paid' },
  ];

  const clubTransactions = [
    { id: '1', date: '2024-03-20', description: 'New Gym Equipment', amount: '-$2,500' },
    { id: '2', date: '2024-03-18', description: 'Member Payment', amount: '+$99' },
    { id: '3', date: '2024-03-15', description: 'Maintenance Supplies', amount: '-$350' },
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Membership Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Membership Plan</Text>
          <View style={styles.subscriptionCard}>
            <View style={styles.subscriptionHeader}>
              <Text style={styles.planName}>{membershipPlans.plan}</Text>
              <Text style={styles.planPrice}>{membershipPlans.price}</Text>
            </View>
            <View style={styles.subscriptionDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Active Members</Text>
                <Text style={styles.detailValue}>{membershipPlans.activeMembers}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Next Billing Cycle</Text>
                <Text style={styles.detailValue}>{membershipPlans.nextBilling}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.manageButton}>
              <Text style={styles.buttonText}>Manage Plans</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Member Payments Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Member Payments</Text>
          <FlatList
            data={memberPayments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.paymentItem}>
                <MaterialIcons name="account-circle" size={24} color="#666" />
                <View style={styles.paymentInfo}>
                  <Text style={styles.paymentMember}>{item.member}</Text>
                  <Text style={styles.paymentDate}>{item.date}</Text>
                </View>
                <Text style={styles.paymentAmount}>{item.amount}</Text>
                <View style={[styles.statusBadge, { backgroundColor: item.status === 'Paid' ? '#4CAF50' : '#FFC107' }]}>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </View>
            )}
          />
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All Payments</Text>
          </TouchableOpacity>
        </View>

        {/* Club Transactions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Club Transactions</Text>
          <FlatList
            data={clubTransactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.transactionItem}>
                <MaterialIcons 
                  name={item.amount.startsWith('+') ? "trending-up" : "trending-down"} 
                  size={24} 
                  color={item.amount.startsWith('+') ? '#4CAF50' : '#F44336'} 
                />
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionDesc}>{item.description}</Text>
                  <Text style={styles.transactionDate}>{item.date}</Text>
                </View>
                <Text style={[styles.transactionAmount, { color: item.amount.startsWith('+') ? '#4CAF50' : '#F44336' }]}>
                  {item.amount}
                </Text>
              </View>
            )}
          />
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All Transactions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  subscriptionCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
  },
  planName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
  },
  planPrice: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '500',
  },
  subscriptionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    color: '#7f8c8d',
    fontSize: 14,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2c3e50',
  },
  manageButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  paymentInfo: {
    flex: 1,
    marginLeft: 16,
  },
  paymentMember: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '500',
  },
  paymentDate: {
    color: '#7f8c8d',
    fontSize: 14,
    marginTop: 4,
  },
  paymentAmount: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
    marginHorizontal: 16,
  },
  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 16,
  },
  transactionDesc: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '500',
  },
  transactionDate: {
    color: '#7f8c8d',
    fontSize: 14,
    marginTop: 4,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '500',
  },
  viewAllButton: {
    marginTop: 8,
    alignSelf: 'flex-end',
  },
  viewAllText: {
    color: '#007AFF',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default PaymentsSubscriptionsScreen;