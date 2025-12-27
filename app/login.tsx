import axios1 from '@/src/utils/axios1';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useState } from 'react';
import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

export default function LoginScreen() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin =  () => {

     setErrorMsg('');
    
     if (!userName.trim()) {
        setErrorMsg('username is required!');
        return;
     } else if(!password.trim()) {
        setErrorMsg('password is required!');
        return;
     }
     else if(!userName.trim() && !password.trim()) {
       setErrorMsg('Username and password are required');
       return;
     }
     axios1.post('/auth/login', {
        userName,
        password,
      }).then((res)=>{
          const token = res.data.token;

          if (token) {
            if (Platform.OS === 'web') {
              localStorage.setItem('token', token);
            } else {
              SecureStore.setItemAsync('token', token);
            }
            router.replace('/home');
          }
      }).catch ((error: any) => {
          Alert.alert('Error', 'Login failed');
          if (error.response && error.response.status === 403) {
            setErrorMsg('Invalid credentials or access denied');
          } else {
            setErrorMsg('Network error. Please try again.');
          }
          console.error(error);
        });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.inner}>
          <Text style={styles.title}>Login</Text>
          {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}
          <TextInput
            style={[styles.input, errorMsg && !userName ? styles.inputError : null]}
            placeholder="Username"
            value={userName}
            onChangeText={setUserName}
            autoCapitalize="none"
          />
          
          <View style={[styles.passwordContainer, errorMsg && !password ? styles.inputError : null]}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity 
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={24} 
                color="grey" 
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.btnContainer}>
            <Button title="Log In" onPress={handleLogin} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: 'center',
  },
  errorText: {
      color: '#FF3B30',
      textAlign: 'center',
      marginBottom: 15,
      fontSize: 14,
      fontWeight: '500',
    },
  inputError: {
      borderColor: '#FF3B30',
    },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    padding: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  btnContainer: {
    marginTop: 10,
  },
});