import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopcontext';
import Breadcrum from '../components/breadcrums/breadcrum';
import ProductDisplay from '../components/productdisplay/productdisplay';

const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProduct.find((e) => e.id === Number(productId));
  return (
    <div className="breadcrum">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
