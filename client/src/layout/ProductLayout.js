import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../components/product/Product';
import FetchError from '../components/error/FetchError';
import Spinner from './Spinner';

const ProductLayout = ({ loading }) => <>
  {loading ? (<Spinner />) : (<>
    <Product />
    <FetchError />
  </>)}
</>;

const mapStateToProps = state => ({
  loading: state.product.loading
});

ProductLayout.propTypes = {
  loading: PropTypes.bool.isRequired
};


export default connect(mapStateToProps)(ProductLayout);