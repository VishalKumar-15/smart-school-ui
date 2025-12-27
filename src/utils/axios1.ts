import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const axios1 = axios.create({
  baseURL: 'http://xx.xxx.xx.xxx:8081',
  headers: {
    'Content-Type': 'application/json',
  },
});

axios1.interceptors.request.use(
  async (config) => {
    let token;
    if (Platform.OS === 'web') {
      token = localStorage.getItem('token');
    } else {
      token = await SecureStore.getItemAsync('token');
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios1;