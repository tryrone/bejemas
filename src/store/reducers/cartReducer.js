import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_CART_DATA,
} from '../types';

const initialState = {
  cart: [],
  products:[]
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: 
      const newData = [...state.cart];
      newData.push(action.payload);
      return {
        ...state,
        cart: newData,
      };
      case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [],
      };
    case SET_CART_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default CartReducer;
