import React from 'react';
import './Navbar.css';
import logo from '../components/assets/logo-transparent.png';
import carticon from '../components/assets/cart-icon.png';

const Navbar = () => (
  <div className="navbar">
    <div className="nav-logo">
      <img src={logo} alt="" />
      <p>THE KIDS SHOP</p>
    </div>
    <ul className="nav-menu">
      <li>Shop</li>
      <li>Infants</li>
      <li>Children</li>
      <li>Accessories</li>
    </ul>
    <div className="nav-login-cart">
      <button type="submit">Login</button>
      <img src={carticon} alt="" />
    </div>
  </div>
);

export default Navbar;
