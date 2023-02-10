import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: "http://a562-203-115-84-17.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
