import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "./CartReducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { cartItems: [] });

  const add = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  const increase = (payload) => {
    dispatch({ type: "INCREASE_ITEM", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE_ITEM", payload });
  };

  const remove = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const contextValues = {
    remove,
    add,
    increase,
    decrease,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
