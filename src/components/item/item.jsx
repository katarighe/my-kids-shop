import React from 'react';
import './item.css';

const item = (props) => (
  <div className="item">
    <img src={props.image} alt="" />
    <p>{props.name}</p>
    <div className="item-prices">
      <div className="item-price-new">
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        ${props.new_price}
      </div>
      <div className="item-price-old">
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        ${props.old_price}
        <br />
      </div>
    </div>
  </div>
);

export default item;
