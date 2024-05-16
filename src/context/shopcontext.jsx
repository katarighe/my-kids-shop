import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import allProduct from '../components/assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = useMemo(() => ({ allProduct }), []);

  const { children } = props;

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
