import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setValidationError } from '../../actions/validation';
import PropTypes from 'prop-types';
import Alert from '../error/Alert';

const SearchBar = ({ setValidationError }) => {
  // Use formData here because we might have more fields than just asin in the future
  const [formData, setFromData] = useState({
    asin: ''
  });

  // eslint-disable-next-line no-unused-vars
  const [fetchProductData, setFetchProductData] = useState(null);

  const { asin } = formData;

  const onChange = e => {
    return setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    // Silly validaion, but can be replaced with actual one.
    if (asin.length < 10)
      setValidationError('Invalid ASIN detected - length less than 10');
    else {
      try {
        const response = await axios.get(`/api/product/${asin}`);
        setFetchProductData({ ...fetchProductData, fetchProductData: response.data });
        console.log(`got response! + ${JSON.stringify(fetchProductData)}`);
      } catch (err) {
        console.error(err.response);
      }
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
  setValidationError: PropTypes.func.isRequired
};

export default connect(null, { setValidationError })(SearchBar);