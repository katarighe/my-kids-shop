import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-transparent.png';
import cartIcon from '../assets/cart_icon.png';
import { ShopContext } from '../../context/shopcontext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const {
    getTotalCartItems,
  } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>DHALAN KIDS SHOP</p>
      </div>
      <ul className="nav-menu">
        <li
          aria-hidden="true"
          onClick={() => {
            setMenu('shop');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setMenu('shop');
            }
          }}
        >
          <Link to="/">Shop</Link>
          {menu === 'shop' ? <hr /> : null}
        </li>
        <li
          aria-hidden="true"
          onClick={() => {
            setMenu('infants');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setMenu('infants');
            }
          }}
        >
          <Link to="/infants">Infants</Link>
          {menu === 'infants' ? <hr /> : null}
        </li>
        <li
          aria-hidden="true"
          onClick={() => {
            setMenu('children');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setMenu('children');
            }
          }}
        >
          <Link to="/children">Children</Link>
          {menu === 'children' ? <hr /> : null}
        </li>
        <li
          aria-hidden="true"
          onClick={() => {
            setMenu('accessories');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setMenu('accessories');
            }
          }}
        >
          <Link to="/accessories">Accessories</Link>
          {menu === 'accessories' ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button type="submit" className="login">
          <Link to="/login">Login</Link>
        </button>
        <Link to="/cart"><img src={cartIcon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
