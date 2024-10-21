import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
} from "../constants/actionTypes";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case ADD_PRODUCT:
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      return state.filter((product) => product._id !== action.payload);
    case EDIT_PRODUCT:
      return state.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
    default:
      return state;
  }
};

export default productReducer;
