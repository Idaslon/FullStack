import { all, takeLatest } from 'redux-saga/effects';

import { LOAD_REQUEST } from './repositories/types';
import { load } from './repositories/sagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOAD_REQUEST, load),
  ]);
}
