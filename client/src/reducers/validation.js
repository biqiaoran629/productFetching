import { SET_VALIDATION_ERROR, REMOVE_VALIDATION_ERROR } from '../actions/types';

const initialState =
{
  message: ''
};

export default function (state = initialState, action) {

  // eslint-disable-next-line no-unused-vars
  const { type, payload } = action;

  switch (type) {
    case SET_VALIDATION_ERROR:
      return { ...state, message: payload.message };
    case REMOVE_VALIDATION_ERROR:
      return { ...state, message: '' };
    default:
      return state;
  }
}