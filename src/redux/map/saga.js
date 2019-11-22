import {takeLatest, call, put} from 'redux-saga/effects';

import * as actions from './actions';
import * as paths from './paths';
import * as api from '../../common/settings/serverConfig/serverConfig';

export function* fetchRoutes({payload}) {
  const {addressFrom, addressTo} = payload;

  try {
    const result = yield call(api.fetchRoutes, addressFrom, addressTo);
    yield put(actions.fetchRoutesSuccess(result));
  } catch ({message, error}) {
    yield put(actions.fetchRoutesFailure(error || message))
  }
}

export function* fetchAddresses() {
  try {
    const {addresses} = yield call(api.fetchAddresses);
    yield put(actions.fetchAddressesSuccess(addresses));
  } catch ({message, error}) {
    yield put(actions.fetchAddressesFailure(error || message))
  }
}

export function* addressesSaga() {
  yield takeLatest(paths.FETCH_ADDRESSES_REQUEST, fetchAddresses);
}

export function* routesSaga() {
  yield takeLatest(paths.FETCH_ROUTES_REQUEST, fetchRoutes);
}
