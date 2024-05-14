import React from 'react';
import './offers.css';
import exclusiveImage from '../assets/exclusive_image.png';

const offers = () => (
  <div className="offers">
    <div className="offers-left">
      <h1>EXCLUSIVE</h1>
      <h1>Offers For You</h1>
      <p>ONLY ON BEST PRODUCTS</p>
      <button type="button">Shop Now</button>
    </div>
    <div className="offers-right">
      <img src={exclusiveImage} alt="" />
    </div>
  </div>
);

export default offers;
