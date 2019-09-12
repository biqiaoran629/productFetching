import axios from 'axios';

import { FETCH_PRODUCT, SET_FETCH_ERROR, REMOVE_FETCH_ERROR } from './types';

export const getProduct = asin => async dispatch => {

  try {
    const response = await axios.get(`/api/product/${asin}`);

    const obj = { ...response.data, dimentions: `${response.data.dimentions.x} x ${response.data.dimentions.y} x ${response.data.dimentions.z} ${response.data.dimentions.unit}` };

    console.log(JSON.stringify(response.data));

    dispatch({
      type: FETCH_PRODUCT,
      payload: obj
    });
  } catch (err) {
    dispatch({ type: SET_FETCH_ERROR, payload: { errorMessage: err.response.data.msg, errorCode: err.response.status } });
    // setFetchError(err);
  }
};

// export const setFetchError = (err) => dispatch => {
//   console.log(`err: ${err}`);
//   dispatch({ type: SET_FETCH_ERROR, payload: { errorMessage: err.data.msg, errorCode: err.status } });
// };

export const removeFetchError = () => dispatch => {
  dispatch({ type: REMOVE_FETCH_ERROR });
};