import React from 'react';
import './breadcrum.css';
import arrowIcon from '../assets/arrow.png';

const breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME
      <img src={arrowIcon} alt="" />
      SHOP
      <img src={arrowIcon} alt="" />
      {product.category}
      <img src={arrowIcon} alt="" />
      {product.name}
    </div>
  );
};

export default breadcrum;
