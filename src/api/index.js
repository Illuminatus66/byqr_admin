import axios from 'axios';

const API = axios.create({
  baseURL: 'https://backend-url.com',
});


API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role')
  if (token && role === 'admin') {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const logIn = (formData) => API.post('/admin/login', formData);
export const addProduct = (productData) => API.post('/admin/add', productData);
export const removeProduct = (id) => API.delete(`/admin/delete/${id}`);
export const editProduct = (productData) => API.patch('/admin/edit', productData);
export const fetchProducts = () => API.post('/fetchall');
