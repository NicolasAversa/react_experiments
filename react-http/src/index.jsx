import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Setting axios defaults globally
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common.Authorization = 'AUTH TOKEN';

// Using request interceptors
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// Using response interceptors onlu for the default axios instance
axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
},
(error) => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
