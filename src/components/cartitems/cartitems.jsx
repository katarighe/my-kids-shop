import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopcontext';
import './cartitems.css';
import removeIcon from '../assets/cart_cross_icon.png';

const CartItems = () => {
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
      <hr />
      {allProduct.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button type="button" className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <img
                  className="cartitems-remove-icon"
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
