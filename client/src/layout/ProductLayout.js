import React from 'react';
import Product from '../components/product/Product';
import FetchError from '../components/error/FetchError';
import Spinner from './Spinner';

const ProductLayout = () => <>
  <Spinner />
  <Product />
  <FetchError />
</>;

export default ProductLayout;