import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import allProduct from '../components/assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let index = 0; index < allProduct.length; index += 1) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const { children } = props;

  const contextValue = useMemo(() => ({
    allProduct,
    cartItems,
    addToCart,
    removeFromCart,
  }), [cartItems]);

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
