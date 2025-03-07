import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navbar from "../components/UI/Navbar";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const ScheduleScreen = () => {
  const [viewMode, setViewMode] = useState('week');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showWorkoutModal, setShowWorkoutModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  // Sample data
  const classSchedule = [
    { id: 1, time: '07:00 AM', name: 'Morning Yoga', trainer: 'Alice', type: 'yoga', attendees: 15, maxCapacity: 20 },
    { id: 2, time: '09:00 AM', name: 'HIIT Training', trainer: 'Bob', type: 'hiit', attendees: 18, maxCapacity: 25 },
    { id: 3, time: '05:00 PM', name: 'Zumba Dance', trainer: 'Charlie', type: 'dance', attendees: 22, maxCapacity: 30 },
  ];

  const members = [
    { id: 1, name: 'John Doe', currentPlan: 'Beginner Routine' },
    { id: 2, name: 'Jane Smith', currentPlan: 'Strength Training' },
    { id: 3, name: 'Mike Johnson', currentPlan: 'Cardio Focus' },
  ];

  const workoutPlans = ['Beginner Routine', 'Strength Training', 'Cardio Focus', 'Weight Loss', 'Muscle Gain'];

  const renderCalendarDay = ({ item }) => (
    <TouchableOpacity 
      style={styles.calendarDay}
      onPress={() => setSelectedDate(item.date)}
    >
      <Text style={styles.dayNumber}>{item.day}</Text>
      <Text style={styles.dayName}>{item.weekday}</Text>
    </TouchableOpacity>
  );

  const renderClassItem = ({ item }) => (
    <View style={styles.classCard}>
      <View style={styles.classHeader}>
        <Text style={styles.classTime}>{item.time}</Text>
        <Text style={styles.classType}>{item.type.toUpperCase()}</Text>
      </View>
      <Text style={styles.className}>{item.name}</Text>
      <Text style={styles.classTrainer}>with {item.trainer}</Text>
      
      <View style={styles.classFooter}>
        <View style={styles.attendanceBadge}>
          <Icon name="account" size={16} color="#666" />
          <Text style={styles.attendanceText}>{item.attendees}/{item.maxCapacity}</Text>
        </View>
        <TouchableOpacity 
          style={styles.attendanceButton}
          onPress={() => {
            setSelectedClass(item);
            setShowAttendanceModal(true);
          }}
        >
          <Text style={styles.buttonText}>Mark Attendance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Schedule View Toggle */}
        <View style={styles.viewToggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'week' && styles.activeToggle]}
            onPress={() => setViewMode('week')}
          >
            <Text style={[styles.toggleText, viewMode === 'week' && styles.activeToggleText]}>Week View</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'month' && styles.activeToggle]}
            onPress={() => setViewMode('month')}
          >
            <Text style={[styles.toggleText, viewMode === 'month' && styles.activeToggleText]}>Month View</Text>
          </TouchableOpacity>
        </View>

        {/* Calendar */}
        <FlatList
          horizontal
          data={[...Array(7).keys()].map(i => ({
            id: i,
            day: i + 1,
            weekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i],
            date: new Date(new Date().setDate(new Date().getDate() + i))
          }))}
          renderItem={renderCalendarDay}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.calendarContainer}
          showsHorizontalScrollIndicator={false}
        />

        {/* Class Schedule */}
        <Text style={styles.sectionTitle}>Today's Classes</Text>
        <FlatList
          data={classSchedule}
          renderItem={renderClassItem}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />

        {/* Workout Plans Section */}
        <View style={styles.workoutSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Member Workout Plans</Text>
            <TouchableOpacity style={styles.addButton}>
              <Icon name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
          
          {members.map(member => (
            <View key={member.id} style={styles.memberCard}>
              <Text style={styles.memberName}>{member.name}</Text>
              <View style={styles.planContainer}>
                <Text style={styles.planText}>{member.currentPlan}</Text>
                <TouchableOpacity 
                  style={styles.assignButton}
                  onPress={() => {
                    setSelectedMember(member);
                    setShowWorkoutModal(true);
                  }}
                >
                  <Text style={styles.buttonText}>Assign New</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Attendance Modal */}
        <Modal visible={showAttendanceModal} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Mark Attendance for {selectedClass?.name}</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowAttendanceModal(false)}>
              <Icon name="close" size={24} color="#666" />
            </TouchableOpacity>
            
            <View style={styles.attendanceOptions}>
              <TouchableOpacity style={[styles.attendanceOption, { backgroundColor: '#4CAF50' }]}>
                <Text style={styles.attendanceOptionText}>Present</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.attendanceOption, { backgroundColor: '#F44336' }]}>
                <Text style={styles.attendanceOptionText}>Absent</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Workout Plan Modal */}
        <Modal visible={showWorkoutModal} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Assign Plan to {selectedMember?.name}</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowWorkoutModal(false)}>
              <Icon name="close" size={24} color="#666" />
            </TouchableOpacity>
            
            {workoutPlans.map(plan => (
              <TouchableOpacity key={plan} style={styles.planOption}>
                <Text style={styles.planOptionText}>{plan}</Text>
              </TouchableOpacity>
            ))}
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
  viewToggleContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeToggle: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleText: {
    color: '#666',
    fontWeight: '500',
  },
  activeToggleText: {
    color: '#2196F3',
  },
  calendarContainer: {
    paddingVertical: 8,
    marginBottom: 16,
  },
  calendarDay: {
    width: 60,
    alignItems: 'center',
    padding: 8,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dayName: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  classCard: {
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
  classHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  classTime: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  classType: {
    color: '#666',
    fontSize: 12,
    fontWeight: '500',
  },
  className: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  classTrainer: {
    color: '#666',
    marginBottom: 12,
  },
  classFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attendanceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  attendanceText: {
    color: '#666',
  },
  attendanceButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
  workoutSection: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 8,
  },
  memberCard: {
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
  memberName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  planContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planText: {
    color: '#666',
  },
  assignButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
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
  attendanceOptions: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 20,
  },
  attendanceOption: {
    flex: 1,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  attendanceOptionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  planOption: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  planOptionText: {
    fontSize: 16,
  },
});

export default ScheduleScreen;