import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Cambia por tu URL backend
  withCredentials: true, // Si usas cookies o sesiones
});

export default api;
