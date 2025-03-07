import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navbar from "../components/UI/Navbar";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const ManagementScreen = () => {
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showCoachModal, setShowCoachModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  // Sample Data
  const [coaches, setCoaches] = useState([
    { id: 1, name: 'John Coach', specialty: 'Strength Training', status: 'pending' },
    { id: 2, name: 'Sarah Trainer', specialty: 'Yoga', status: 'approved' },
  ]);

  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, type: 'coach', name: 'John Coach', dates: '2023-08-20 to 2023-08-25', status: 'pending' },
    { id: 2, type: 'student', name: 'Mike Student', dates: '2023-08-22', status: 'pending' },
  ]);

  const students = [
    { id: 1, name: 'Alice Student', attendance: '95%', progress: 'Excellent', lastReport: '2023-08-15' },
    { id: 2, name: 'Bob Trainee', attendance: '82%', progress: 'Good', lastReport: '2023-08-14' },
  ];

  // Coach Actions
  const handleCoachApproval = (id, approve) => {
    setCoaches(coaches.map(c => c.id === id ? { ...c, status: approve ? 'approved' : 'rejected' } : c));
    setShowCoachModal(false);
  };

  // Leave Actions
  const handleLeaveApproval = (id, approve) => {
    setLeaveRequests(leaveRequests.map(l => l.id === id ? { ...l, status: approve ? 'approved' : 'rejected' } : l));
    setShowLeaveModal(false);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Pending Coaches Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending Coach Approvals 👥</Text>
          <FlatList
            data={coaches.filter(c => c.status === 'pending')}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.specialty}>{item.specialty}</Text>
                </View>
                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    style={[styles.button, styles.approveButton]}
                    onPress={() => handleCoachApproval(item.id, true)}
                  >
                    <Text style={styles.buttonText}>Approve</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.rejectButton]}
                    onPress={() => handleCoachApproval(item.id, false)}
                  >
                    <Text style={styles.buttonText}>Reject</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        {/* Leave Approvals Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Leave Requests 🏖️</Text>
          <FlatList
            data={leaveRequests.filter(l => l.status === 'pending')}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Icon
                    name={item.type === 'coach' ? 'account-tie' : 'account'}
                    size={20}
                    color="#666"
                  />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.dates}>{item.dates}</Text>
                </View>
                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    style={[styles.button, styles.approveButton]}
                    onPress={() => handleLeaveApproval(item.id, true)}
                  >
                    <Text style={styles.buttonText}>Approve</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.rejectButton]}
                    onPress={() => handleLeaveApproval(item.id, false)}
                  >
                    <Text style={styles.buttonText}>Deny</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        {/* Student KPI Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Student KPI Reports 📊</Text>
          <FlatList
            data={students}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() => setSelectedStudent(item)}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.kpiBadge}>{item.attendance} Attendance</Text>
                </View>
                <View style={styles.kpiDetails}>
                  <Text style={styles.kpiText}>Progress: {item.progress}</Text>
                  <Text style={styles.kpiText}>Last Report: {item.lastReport}</Text>
                </View>
                <TouchableOpacity
                  style={styles.reportButton}
                  onPress={() => setShowReportModal(true)}
                >
                  <Text style={styles.buttonText}>View Full Report</Text>
                  <Icon name="chevron-right" size={20} color="#fff" />
                </TouchableOpacity>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        {/* Report Modal */}
        <Modal visible={showReportModal} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedStudent?.name}'s Full Report</Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowReportModal(false)}
            >
              <Icon name="close" size={24} color="#666" />
            </TouchableOpacity>

            {/* Add detailed report content here */}
            <View style={styles.reportContent}>
              <Text>Attendance: {selectedStudent?.attendance}</Text>
              <Text>Progress: {selectedStudent?.progress}</Text>
              <Text>Last Assessment: 2023-08-15</Text>
              <Text>Coach Comments: Excellent performance...</Text>
            </View>
          </View>
        </Modal>

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
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  specialty: {
    color: '#666',
    fontSize: 14,
  },
  dates: {
    color: '#666',
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  approveButton: {
    backgroundColor: '#4CAF50',
  },
  rejectButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
  kpiBadge: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    color: '#1976d2',
    fontSize: 12,
  },
  kpiDetails: {
    marginVertical: 8,
    gap: 4,
  },
  kpiText: {
    color: '#666',
    fontSize: 14,
  },
  reportButton: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 6,
    marginTop: 12,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  reportContent: {
    gap: 12,
    marginTop: 20,
  },
});

export default ManagementScreen;