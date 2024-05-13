import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo-transparent.png';
import cartIcon from '../assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>THE KIDS SHOP</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu('shop');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setMenu('shop');
            }
          }}
        >
          Shop
          { menu === 'shop' ? <hr /> : null }
        </li>
        <li
          onClick={() => {
            setMenu('infants');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setMenu('infants');
            }
          }}
        >
          Infants
          { menu === 'infants' ? <hr /> : null }
        </li>
        <li
          onClick={() => {
            setMenu('children');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setMenu('children');
            }
          }}
        >
          Children
          {menu === 'children' ? <hr /> : null }
        </li>
        <li
          onClick={() => {
            setMenu('accessories');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setMenu('accessories');
            }
          }}
        >
          Accessories
          { menu === 'accessories' ? <hr /> : null }
        </li>
      </ul>
      <div className="nav-login-cart">
        <button type="submit">Login</button>
        <img src={cartIcon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
