import React from 'react';
import newCollection from '../assets/new_collections';
import Item from '../item/item';
import './new-collections.css';

const NewCollections = () => (
  <div className="new-collections">
    <h1>NEW COLLECTIONS</h1>
    <hr />
    <div className="collections">
      {newCollection.map((item) => (
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

export default NewCollections;
