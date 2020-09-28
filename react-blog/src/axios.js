import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common.Authorization = 'AUTH TOKEN FROM INSTANCE';

// Setting interceptors locally in the instance
instance.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;
