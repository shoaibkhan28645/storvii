import axios from 'axios';

const API_URL = 'http://192.168.100.9:3000'; // Replace with your server URL

export const signup = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
