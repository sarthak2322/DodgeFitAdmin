import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { PieChart, LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navbar from "../components/UI/Navbar";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DashboardScreen = () => {
  // Sample data for pie chart (membership types)
  const pieData = [
    {
      name: 'Regular',
      population: 2500,
      color: '#F00',
      legendFontColor: '#7F7F7F',
    },
    {
      name: 'VIP',
      population: 1500,
      color: '#0F0',
      legendFontColor: '#7F7F7F',
    },
    {
      name: 'Staff',
      population: 500,
      color: '#00F',
      legendFontColor: '#7F7F7F',
    },
  ];

  // Sample data for line chart (monthly attendance)
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard 🏠</Text>
        </View>

      {/* Quick KPI Cards */}
      <View style={styles.kpiContainer}>
        <View style={styles.kpiCard}>
          <Text style={styles.kpiTitle}>Total Members</Text>
          <Text style={styles.kpiValue}>4,500</Text>
        </View>
        <View style={styles.kpiCard}>
          <Text style={styles.kpiTitle}>Active Events</Text>
          <Text style={styles.kpiValue}>12</Text>
        </View>
        <View style={styles.kpiCard}>
          <Text style={styles.kpiTitle}>Monthly Revenue</Text>
          <Text style={styles.kpiValue}>$45K</Text>
        </View>
        <View style={styles.kpiCard}>
          <Text style={styles.kpiTitle}>Avg. Attendance</Text>
          <Text style={styles.kpiValue}>68%</Text>
        </View>
      </View>

      {/* Pie Chart - Membership Distribution */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Membership Distribution</Text>
        <PieChart
          data={pieData}
          width={screenWidth - 32}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      {/* Line Chart - Monthly Attendance Trend */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Monthly Attendance Trend</Text>
        <LineChart
          data={lineData}
          width={screenWidth - 32}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          bezier
        />
      </View>

      {/* Quick Reports Access */}
      <View style={styles.reportsContainer}>
          <Text style={styles.sectionTitle}>Quick Reports</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.reportCard}>
            <Icon name="file-chart" size={32} color="#4CAF50" />
            <Text style={styles.reportText}>Monthly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reportCard}>
            <Icon name="finance" size={32} color="#2196F3" />
            <Text style={styles.reportText}>Financial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reportCard}>
            <Icon name="account-group" size={32} color="#9C27B0" />
            <Text style={styles.reportText}>Membership</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reportCard}>
            <Icon name="calendar" size={32} color="#FF9800" />
            <Text style={styles.reportText}>Events</Text>
          </TouchableOpacity>
          
            </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'relative',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  contentContainer: {
    paddingBottom: screenHeight * 0.12, // Add space for navbar
  },
  navbar: {
    backgroundColor: "#66c9de",
    width: "100%",
    height: screenHeight * 0.08,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: screenHeight * 0.02,
  },
  header: {
    marginBottom: 20,
    marginTop: 48
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  kpiContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  kpiCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  kpiTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  kpiValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  chartContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  reportsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  reportCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    width: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reportText: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default DashboardScreen;