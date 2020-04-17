import { combineReducers } from 'redux';

import products from './products/reducers';

const reducers = combineReducers({
  products,
});

export default reducers;
