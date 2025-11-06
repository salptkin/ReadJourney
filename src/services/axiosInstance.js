import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;

// Backend API URL - .env dosyasından veya direkt olarak belirtilmiş
// .env dosyasında: VITE_BASE_URL=https://readjourney.b.goit.study/api
const baseURL = VITE_BASE_URL || 'https://readjourney.b.goit.study/api';

// Debug: Hangi URL kullanılıyor kontrol et
console.log('VITE_BASE_URL from env:', VITE_BASE_URL);
console.log('Using baseURL:', baseURL);

export const instance = axios.create({
  baseURL: baseURL,
});