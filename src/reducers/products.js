import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
} from "../constants/actionTypes";

const initialState = {
  products: [],
  message: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload, message: null };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
        message: action.payload.message,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== action.payload),
        message: "Product removed successfully",
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload.product._id ? action.payload.product : product
        ),
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default productReducer;

