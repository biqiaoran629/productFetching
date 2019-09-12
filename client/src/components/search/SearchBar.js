import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setValidationError, removeValidationError } from '../../actions/validation';
import { getProduct, removeFetchError } from '../../actions/product';
import PropTypes from 'prop-types';

const SearchBar = ({ setValidationError, removeValidationError, getProduct, message, errorCode }) => {
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
      console.log(`do we have a msg? ${JSON.stringify(message)}`);
      if (message)
        removeValidationError();
      if (errorCode)
        removeFetchError();
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
      <button className="search__button">
      </button>
    </form>
  </>;
};

SearchBar.propTypes = {
  getProduct: PropTypes.func.isRequired,
  setValidationError: PropTypes.func.isRequired,
  removeValidationError: PropTypes.func.isRequired,
  removeFetchError: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  errorCode: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  message: state.validation.message,
  errorCode: state.product.error.code
});

export default connect(mapStateToProps, { getProduct, setValidationError, removeValidationError, removeFetchError })(SearchBar);