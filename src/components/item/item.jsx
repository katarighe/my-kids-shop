import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const item = (props) => (
  <div className="item">
    <Link to={`/product/${props.id}`}>
      <img
        onClick={window.scrollTo(0, 0)}
        onKeyDown={(e) => e.key === 'Enter' && window.scrollTo(0, 0)}
        src={props.image}
        alt=""
      />
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
/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */

export default item;
