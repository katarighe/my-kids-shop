import React from 'react';
import './Navbar.css';
import logo from '../assets/logo-transparent.png';
import cartIcon from '../assets/cart_icon.png';

const Navbar = () => (
  <div className="navbar">
    <div className="nav-logo">
      <img src={logo} alt="" />
      <p>THE KIDS SHOP</p>
    </div>
    <ul className="nav-menu">
      <li>
        Shop
        <hr />
      </li>
      <li>Infants</li>
      <li>Children</li>
      <li>Accessories</li>
    </ul>
    <div className="nav-login-cart">
      <button type="submit">Login</button>
      <img src={cartIcon} alt="" />
    </div>
  </div>
);

export default Navbar;
