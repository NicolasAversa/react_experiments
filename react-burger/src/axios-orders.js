import axios from 'axios';

// Instance with base URL of firebase Realtime Database project
const instance = axios.create({
  baseURL: 'https://react-burger-f4731.firebaseio.com/',
});

export default instance;
