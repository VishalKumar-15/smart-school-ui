import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  
  const handleLogout = () => {
    router.replace('/login');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home! 🎉</Text>
      <Text style={styles.text}>You are now logged in.</Text>
      
      <Button 
        title="Logout" 
        onPress={handleLogout} 
        color="#FF3B30" 
      />
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