import React, { useState } from 'react';

const Product = () => {
  const [fetchProductData] = useState(null);

  console.log(`fetch product data: ${fetchProductData}`);

  return <h1>{fetchProductData}</h1>;
};

export default Product;