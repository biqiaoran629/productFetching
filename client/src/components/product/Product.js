import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Product = ({ asin, dimentions, rank, category }) => {
  if (asin && dimentions && rank && category) {
    return <div className="product">
      <span className="product__value">asin: {asin}</span>
      <span className="product__value">dimensions: {dimentions}</span>
      <span className="product__value">rank: {rank}</span>
      <span className="product__value">category: {category}</span>
    </div>;
  }
  return null;
};

Product.propTypes = {
  asin: PropTypes.string.isRequired,
  dimentions: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  asin: state.product.asin,
  category: state.product.category,
  dimentions: state.product.dimentions,
  rank: state.product.rank
});
export default connect(mapStateToProps)(Product);