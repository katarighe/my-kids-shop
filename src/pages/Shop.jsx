import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/popular/popular';
import Offers from '../components/offers/offers';
import NewCollections from '../components/NewCollections/NewCollections';

const Shop = () => (
  <div className="shop">
    <Hero />
    <Popular />
    <Offers />
    <NewCollections />
  </div>
);

export default Shop;
