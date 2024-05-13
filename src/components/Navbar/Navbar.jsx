import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/test">Shop</Link>
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
          <Link to="/sample">Infants</Link>
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
          <Link to="/sample">Children</Link>
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
          <Link to="/sample">Accessories</Link>
          {menu === 'accessories' ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button type="submit" className="login">
          Login
        </button>
        <img src={cartIcon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
