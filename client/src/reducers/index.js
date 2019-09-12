import { combineReducers } from 'redux';
import validation from './validation';
import product from './product';

export default combineReducers({
  product,
  validation
});