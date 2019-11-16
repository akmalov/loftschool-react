import {all} from 'redux-saga/effects';

import {loginSaga, registerSaga} from '../../App/containers/withAuthLayout/store';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
  ]);
}