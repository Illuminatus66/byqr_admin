import * as api from '../api';
import { LOGIN, LOGOUT, FETCH_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT } from '../constants/actionTypes';

export const logIn = (formData) => async (dispatch) => {
  try {
    const { data } = await api.logIn(formData);
    
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', 'admin');
    
    dispatch({ type: LOGIN, payload: { token: data.token, role: 'admin' } });
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  dispatch({ type: LOGOUT });
};

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = (productData) => async (dispatch) => {
  try {
    const { data } = await api.addProduct(productData);
    dispatch({ type: ADD_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = (productId) => async (dispatch) => {
  try {
    await api.removeProduct(productId);
    dispatch({ type: REMOVE_PRODUCT, payload: productId });
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = (productData) => async (dispatch) => {
  try {
    const { data } = await api.editProduct(productData);
    dispatch({ type: EDIT_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
