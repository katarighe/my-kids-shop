import React from 'react';
import './relatedproducts.css';
import dataProduct from '../assets/data';
import Item from '../item/item';

const relatedproducts = () => (
  <div className="relatedproducts">
    <h1>Related Products</h1>
    <hr />
    <div className="relatedproducts-item">
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

export default relatedproducts;
