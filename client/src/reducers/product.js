import { FETCH_PRODUCT, SET_FETCH_ERROR, REMOVE_FETCH_ERROR } from '../actions/types';

const initialState =
{
  loading: true,
  asin: '',
  dimentions: '',
  rank: 0,
  category: '',
  error: {
    message: '',
    code: 0
  }
};

export default function (state = initialState, action) {

  // eslint-disable-next-line no-unused-vars
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCT: {
      return { ...state, loading: false, asin: payload.asin, dimentions: payload.dimentions, rank: payload.rank, category: payload.category };
    }
    case SET_FETCH_ERROR:
      return { ...state, loading: false, error: { message: payload.errorMessage, code: payload.errorCode } };
    case REMOVE_FETCH_ERROR:
      return { ...state, fetchError: { message: '', code: 0 } };
    default:
      return state;
  }
}

