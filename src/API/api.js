import axios from 'axios';


const getToken = () => {
  return localStorage.getItem('token'); 
};

const api = axios.create({
  baseURL: 'https://thebrandstore-react-server.vercel.app/api',
  headers: {
    'Authorization': `Bearer ${getToken()}`,
  },
});



export default api;
