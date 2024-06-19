import axios from 'axios';


const getToken = () => {
  return localStorage.getItem('token'); 
};

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    'Authorization': `Bearer ${getToken()}`,
  },
});



export default api;
