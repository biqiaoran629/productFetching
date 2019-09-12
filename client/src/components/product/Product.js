import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Product = ({ asin, dimentions, rank, category }) => <h1>`${asin} ${dimentions} ${rank} ${category}`</h1>;

Product.propTypes = {
  asin: PropTypes.string.isRequired,
  dimentions: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  asin: state.product.asin,
  dimentions: state.product.dimentions,
  rank: state.product.rank,
  category: state.product.category
});
export default connect(mapStateToProps)(Product);