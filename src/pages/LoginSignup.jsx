import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => (
  <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Your password" />
        <input type="password" placeholder="Comfirm password" />
      </div>
      <br />
      <button type="button">Continue</button>
      <br />
      <p className="loginsignup-login">
        Already have an account?
        <span>Login</span>
      </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By continuing, I agree to use the Terms of Use & Privacy Policy.</p>
      </div>
    </div>
  </div>
);

export default LoginSignup;
