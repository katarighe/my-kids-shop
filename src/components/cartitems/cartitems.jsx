import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopcontext';
import './cartitems.css';
import removeIcon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { allProduct, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProduct.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-items-format cart-items-format-main">
                <img src={e.image} alt="" className="cart-icon-product-icon" />
                <p>{e.name}</p>
                <p>
                  $
                  {e.new_price}
                </p>
                <button type="button" className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>
                  $
                  {e.new_price * cartItems[e.id]}
                </p>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <img
                  className="cart-items-remove-icon"
                  src={removeIcon}
                  onClick={() => removeFromCart(e.id)}
                  onKeyDown={() => removeFromCart(e.id)}
                  alt=""
                />
                {/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */}
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
