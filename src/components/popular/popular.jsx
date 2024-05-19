import React from 'react';
import './popular.css';
import dataProduct from '../assets/data';
import Item from '../item/item';

const popular = () => (
  <div className="popular">
    <h1>MOST POPULAR</h1>
    <hr />
    <div className="popular-item">
      {dataProduct.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      ))}
    </div>
  </div>
);

export default popular;
