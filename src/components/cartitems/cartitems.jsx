import React, { useContext } from 'react';
import './cartitems.css';

const cartitems = () => {
  const { allProduct, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
    </div>
  );
};

export default cartitems;
