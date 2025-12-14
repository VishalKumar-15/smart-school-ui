import { Redirect } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function IndexScreen() {
  return (
    <Redirect href="/login" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White background
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark gray text
  },
});