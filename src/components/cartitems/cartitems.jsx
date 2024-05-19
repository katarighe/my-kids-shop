import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopcontext';
import './cartitems.css';
import removeIcon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const {
    getTotalCartAmount,
    allProduct,
    cartItems,
    removeFromCart,
  } = useContext(ShopContext);
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
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>
                $
                {getTotalCartAmount()}
              </p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>
                $
                {getTotalCartAmount()}
              </h3>
            </div>
          </div>
          <button type="button"> Proceed to Checkout</button>
        </div>
        <div className="cart-items-promo-code">
          <p>If you have a promo code, please enter it here.</p>
          <div className="cart-items-promo-box">
            <input type="text" placeholder="Promo Code" />
            <button type="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
