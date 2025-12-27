import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {router} from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="white" />
        <Text style={styles.headerTitle}>Silver Oaks Oakdale Ca...</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 15 }} />
          <Ionicons name="settings-outline" size={24} color="white" />
        </View>
      </View>

      <ScrollView style={styles.container}>
        {/* Red Quick Actions Bar */}
        <View style={styles.quickActionsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickActionsInner}>
            <QuickAction icon="calendar" label="Attendance" bgColor="#FF8C00" />
            <QuickAction icon="bus" label="Transport Info" bgColor="#00CED1" />
            <QuickAction icon="star" label="Announcements" bgColor="#FF4500" />
            <QuickAction icon="person" label="Parent Concern" bgColor="#BA55D3" />
            <QuickAction icon="images" label="Gallery" bgColor="#40E0D0" />
          </ScrollView>
        </View>

        {/* Categories */}
        <View style={styles.content}>
          <SectionTitle title="SIS" />
          <View style={styles.grid}>
            <TouchableOpacity style={styles.card} onPress={()=> router.push('./SIS/Attendance')}>
                <Ionicons name="calendar-outline" size={40} color={"#FF8C00"} />
                <Text style={styles.cardLabel}>Attendance</Text>
             </TouchableOpacity>
            <MenuCard icon="exit-outline" label="Apply Leave" color="#00CED1" />
          </View>

          <SectionTitle title="Finance" />
          <View style={styles.grid}>
            <MenuCard icon="wallet-outline" label="Fee Details" color="#20B2AA" />
          </View>

          <SectionTitle title="Library" />
          <View style={styles.grid}>
            <MenuCard icon="folder-open-outline" label="Library" color="#9370DB" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Helper Components
const QuickAction = ({ icon, label, bgColor }: any) => (
  <TouchableOpacity style={styles.quickActionItem}>
    <View style={[styles.quickActionCircle, { backgroundColor: 'white' }]}>
       <Ionicons name={icon} size={24} color={bgColor} />
    </View>
    <Text style={styles.quickActionLabel}>{label}</Text>
  </TouchableOpacity>
);

const SectionTitle = ({ title }: any) => <Text style={styles.sectionTitle}>{title}</Text>;

const MenuCard = ({ icon, label, color }: any) => (
  <TouchableOpacity style={styles.card}>
    <Ionicons name={icon} size={40} color={color} />
    <Text style={styles.cardLabel}>{label}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#B22222' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#B22222',
  },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row' },
  container: { flex: 1, backgroundColor: 'white' },
  quickActionsContainer: { backgroundColor: '#B22222', paddingBottom: 20 },
  quickActionsInner: { paddingHorizontal: 10 },
  quickActionItem: { alignItems: 'center', width: 85 },
  quickActionCircle: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginBottom: 5 },
  quickActionLabel: { color: 'white', fontSize: 10, textAlign: 'center' },
  content: { padding: 20 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#B22222', marginTop: 10, marginBottom: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 15 },
  card: {
    width: '47%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardLabel: { marginTop: 10, fontSize: 14, fontWeight: '600', color: '#333' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
  socialBtn: { padding: 10 },
});