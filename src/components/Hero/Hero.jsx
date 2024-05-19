import React from 'react';
import './Hero.css';
import arrowIcon from '../assets/arrow.png';
import heroImage from '../assets/hero_image.png';

const Hero = () => (
  <div className="hero">
    <div className="hero-left">
      <h2>NEW ARRIVALS ONLY</h2>
      <div>
        <p>new kid</p>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest Collections</div>
        <img src={arrowIcon} alt="" />
      </div>
    </div>
    <div className="hero-right">
      <img src={heroImage} alt="" />
    </div>
  </div>
);

export default Hero;
