import {takeLatest, call, put} from 'redux-saga/effects';

import * as actions from './actions';
import * as paths from './paths';
import * as api from '../../common/settings/serverConfig/serverConfig';

export function* createProfile({payload}) {
  try {
    const result = yield call(api.createProfile, payload);

    if (result.error) {
      throw new Error(result.error);
    }

    const {token, ...card} = payload;

    yield put(actions.createCardSuccess(card));
  } catch ({message, error}) {
    yield put(actions.createCardFailure(error || message))
  }
}

export function* fetchProfile({payload}) {
  try {
    const result = yield call(api.fetchProfile, payload);

    if (result.error) {
      throw new Error(result.error);
    }

    const {id, ...card} = result;

    yield put(actions.fetchCardSuccess(card));
  } catch ({message, error}) {
    yield put(actions.fetchCardFailure(error || message))
  }
}

export function* fetchProfileSaga() {
  yield takeLatest(paths.FETCH_REQUEST, fetchProfile);
}

export function* createProfileSaga() {
  yield takeLatest(paths.CREATE_REQUEST, createProfile);
}
