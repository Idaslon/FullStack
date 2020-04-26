import { combineReducers } from 'redux';

import mystate from './mystate/reducers';

const reducers = combineReducers({
  mystate,
});

export default reducers;
