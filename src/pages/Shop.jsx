import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/popular/popular';
import Offers from '../components/offers/offers';
import NewCollections from '../components/new-collections/new-collections';
import Newsletter from '../components/newsletter/newsletter';

const Shop = () => (
  <div className="shop">
    <Hero />
    <Popular />
    <Offers />
    <NewCollections />
    <Newsletter />
  </div>
);

export default Shop;
