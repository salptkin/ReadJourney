import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;

const baseURL = VITE_BASE_URL || 'https://readjourney.b.goit.study/api';

export const instance = axios.create({
  baseURL: baseURL,
});