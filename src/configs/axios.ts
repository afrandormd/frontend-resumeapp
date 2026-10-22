import axios from 'axios';

const API_URI = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URI || '/api/v1',
  withCredentials: true,
});

export default api;


