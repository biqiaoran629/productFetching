import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setValidationError, removeValidationError } from '../../actions/validation';
import { getProduct } from '../../actions/product';
import PropTypes from 'prop-types';

const SearchBar = ({ setValidationError, removeValidationError, getProduct, message }) => {
  // Use formData here because we might have more fields than just asin in the future
  const [formData, setFromData] = useState({
    asin: ''
  });

  const { asin } = formData;

  const onChange = e => {
    return setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    // Silly validaion, but can be replaced with actual one.
    if (asin.length < 10) {
      setValidationError('Invalid ASIN detected - length less than 10');
    } else {
      if (message)
        removeValidationError();
      getProduct(asin);
    }
  };

  return <>
    <form action="#" className="search" onSubmit={e => onSubmit(e)}>
      <input
        type="text"
        className="search__input"
        name="asin"
        placeholder="Search Product"
        value={asin}
        onChange={e => onChange(e)}
        required
      />
    </form>
  </>;
};

SearchBar.propTypes = {
  getProduct: PropTypes.func.isRequired,
  setValidationError: PropTypes.func.isRequired,
  removeValidationError: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  message: state.validation.message,
  errorCode: state.product.error.code
});

export default connect(mapStateToProps, { getProduct, setValidationError, removeValidationError })(SearchBar);