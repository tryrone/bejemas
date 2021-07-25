import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_CART_DATA,
} from '../types';


const addToCart = (payload) => {
  return (dispatch) => {
    dispatch({ type: ADD_TO_CART, payload });
  };
};

const removeFromCart = () => {
  return (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART });
  };
};

const setCartData = (payload) => {
  return (dispatch) => {
    dispatch({ type: SET_CART_DATA, payload });
  };
};

export default {
  addToCart,
  removeFromCart,
  setCartData,
};
