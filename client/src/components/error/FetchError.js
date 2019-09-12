import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FetchError = ({ errorMessage, errorCode }) => {
  if (errorMessage && errorCode) {
    return <>
      <h2>`Error code: ${errorCode}`</h2>
      <h1>{errorMessage}</h1>
    </>;
  }
  else {
    return null;
  }
};


FetchError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  errorCode: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  errorMessage: state.product.error.message,
  errorCode: state.product.error.code
});

export default connect(mapStateToProps)(FetchError);
