import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Attendance() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 30,
    color: '#666',
  },
});