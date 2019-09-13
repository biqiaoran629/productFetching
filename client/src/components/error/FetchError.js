import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import errorImg from '../../images/error.png';

const FetchError = ({ errorMessage, errorCode }) => {
  if (errorMessage && errorCode) {
    return <div className="error">
      <h2 className="error__text">HTTP Error {errorCode}: {errorMessage}</h2>
      <img className="error__img" src={errorImg} alt="error"></img>
    </div>;
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
