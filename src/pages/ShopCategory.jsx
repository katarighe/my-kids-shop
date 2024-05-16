import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/shopcontext';
import dropdownIcon from '../components/assets/dropdown_icon.png';
import Item from '../components/item/item';

const ShopCategory = ({ banner, category }) => {
  const { allProduct } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={banner} alt="" />
      <div className="div-shoepcategory-indexSort">
        <p>
          <span>Showing 1-12</span>
          out of 36 products
        </p>
      </div>
      <div className="div-shopecategory-sort">
        Sort by
        <img src={dropdownIcon} alt="" />
      </div>
      <div className="div-shopcategory-products">
        {allProduct.map((item) => {
          if (category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ShopCategory;
