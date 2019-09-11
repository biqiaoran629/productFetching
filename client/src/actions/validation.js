import { SET_VALIDATION_ERROR, REMOVE_VALIDATION_ERROR } from './types';

export const setValidationError = (message) => dispatch => {
  dispatch({ type: SET_VALIDATION_ERROR, payload: { message } });
};