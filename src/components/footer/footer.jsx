import React from 'react';
import './footer.css';
import footerLogo from '../assets/logo-transparent.png';
import instagramIcon from '../assets/instagram_icon.png';
import pintrestIcon from '../assets/pintester_icon.png';
import whatsappIcon from '../assets/whatsapp_icon.png';

const footer = () => (
  <div className="footer">
    <div className="footer-logo">
      <img src={footerLogo} alt="" />
      <p>Dhalaan Kids Shop</p>
    </div>
    <ul className="footer-links">
      <li>Company</li>
      <li>Products</li>
      <li>Offices</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </ul>
    <div className="footer-social-icon">
      <div className="div-footer-icons-container">
        <img src={instagramIcon} alt="" />
      </div>
      <div className="div-footer-icons-container">
        <img src={pintrestIcon} alt="" />
      </div>
      <div className="div-footer-icons-container">
        <img src={whatsappIcon} alt="" />
      </div>
      <div className="div-footer-copyright">
        <p>&copy; 2024 Dhalaan Kids Shop</p>
      </div>
    </div>
  </div>
);

export default footer;
