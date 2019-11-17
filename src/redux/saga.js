import {all} from 'redux-saga/effects';

import {loginSaga, registerSaga} from './auth';
import {fetchProfileSaga, createProfileSaga} from './profile';
import {routesSaga, addressesSaga} from './map';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    fetchProfileSaga(),
    createProfileSaga(),
    addressesSaga(),
    routesSaga()
  ]);
}