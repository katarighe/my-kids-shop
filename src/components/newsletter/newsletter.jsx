import React from 'react';
import './newsletter.css';

const newsletter = () => (
  <div className="newsletter">
    <h1>Get Exclusive Offers From Your Inbox</h1>
    <p>Subscribe to our newsletter today and stay updated!</p>
    <div>
      <input type="email" placeholder="Your email here" />
      <button type="submit">Subscribe</button>
    </div>
  </div>
);

export default newsletter;
