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
    if (itemId in cartItems) {
      // eslint-disable-next-line
      console.log(`Adding item ${itemId} to cart`);
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    } else {
      // eslint-disable-next-line
      console.error(`Item ID ${itemId} is not valid`);
    }
  };

  const removeFromCart = (itemId) => {
    if (itemId in cartItems) {
      // eslint-disable-next-line
      console.log(`Removing item ${itemId} from cart`);
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      // eslint-disable-next-line
      console.error(`Item ID ${itemId} is not valid`);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    Object.keys(cartItems).forEach((item) => {
      if (cartItems[item] > 0) {
        const itemInfo = allProduct.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    });
    return totalAmount;
  };

  const { children } = props;

  const contextValue = useMemo(() => ({
    allProduct,
    cartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    // eslint-disable-next-line
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
