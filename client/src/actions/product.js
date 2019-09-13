import axios from 'axios';

import { FETCH_LOADING, FETCH_PRODUCT, SET_FETCH_ERROR, REMOVE_FETCH_ERROR } from './types';

export const getProduct = asin => async dispatch => {

  try {
    dispatch({ type: FETCH_LOADING });

    const response = await axios.get(`/api/product/${asin}`);

    const obj = { ...response.data, dimentions: `${response.data.dimentions.x} x ${response.data.dimentions.y} x ${response.data.dimentions.z} ${response.data.dimentions.unit}` };

    dispatch({ type: REMOVE_FETCH_ERROR });

    dispatch({
      type: FETCH_PRODUCT,
      payload: obj
    });
  } catch (err) {
    dispatch({ type: SET_FETCH_ERROR, payload: { errorMessage: err.response.data.msg, errorCode: err.response.status } });
  }
};