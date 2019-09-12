import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ message }) => message ? <p>{message}</p> : null;


Alert.propTypes = {
  message: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  message: state.validation.message
});

export default connect(mapStateToProps)(Alert);
