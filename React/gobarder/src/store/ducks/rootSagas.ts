import { all } from 'redux-saga/effects';

import mystate from './mystate/sagas';

export default function* rootSaga() {
  yield all([mystate]);
}
