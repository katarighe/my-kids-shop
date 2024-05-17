import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopcontext';
import Breadcrum from '../components/breadcrums/breadcrum';
import ProductDisplay from '../components/productdisplay/productdisplay';
import DescriptionBox from '../components/descriptionbox/descriptionbox';

const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProduct.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <div>
        <ProductDisplay product={product} />
      </div>
      <DescriptionBox />
    </div>
  );
};

export default Product;
