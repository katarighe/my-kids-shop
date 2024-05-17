import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const item = (props) => (
  <div className="item">
    <Link to={`/product/${props.id}`}>
      <img src={props.image} alt="" />
    </Link>
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
