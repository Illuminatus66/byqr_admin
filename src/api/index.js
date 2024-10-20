import axios from 'axios';

const API = axios.create({
  baseURL: 'https://byqr-backend-13bbf36a4c8b.herokuapp.com/',
});


API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role')
  if (token && role === 'admin') {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const logIn = (formData) => API.post('admin/login', formData, { withCredentials: true });
export const addProduct = (productData) => API.post('admin/add', productData, { withCredentials: true });
export const removeProduct = (id) => API.delete(`admin/delete/${id}`, { withCredentials: true });
export const editProduct = (productData) => API.patch('admin/edit', productData, { withCredentials: true });
export const fetchProducts = () => API.get('fetchall', { withCredentials: true });
