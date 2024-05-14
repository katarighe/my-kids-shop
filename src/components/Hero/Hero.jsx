import React from 'react';
import './Hero.css';
import handIcon from '../assets/hand_icon.png';
import arrowIcon from '../assets/arrow.png';
import heroImage from '../assets/hero_image.png';

const Hero = () => (
  <div className="hero">
    <div className="hero-left">
      <h2>NEW ARRIVALS ONLY</h2>
    </div>
    <div>
      <div className="hero-hand-icon">
        <p>New</p>
        <img src={handIcon} alt="" />
      </div>
      <p>collections</p>
      <p>for everyone</p>
    </div>
    <div className="hero-latest-button">
      <div>Latest Collections</div>
      <img src={arrowIcon} alt="" />
    </div>
    <div className="hero-right">
      <img src={heroImage} alt="" />
    </div>
  </div>
);

export default Hero;
