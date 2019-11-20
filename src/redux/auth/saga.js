import {takeLatest, call, put} from 'redux-saga/effects';

import * as actions from './actions';
import * as paths from './paths';
import * as api from '../../common/settings/serverConfig/serverConfig';

export function* requestLogin({payload}) {
  try {
    const result = yield call(api.requestLogin, payload);

    if (!result.success) throw new Error(result.error);

    yield put(actions.loginSuccess(result.token));
  } catch ({message, error}) {
    yield put(actions.loginFailure(error || message))
  }
}

export function* loginSaga() {
  yield takeLatest(paths.LOGIN_REQUEST, requestLogin);
}

export function* requestRegister({payload}) {
  try {
    const result = yield call(api.requestRegister, payload);

    if (!result.success) throw new Error(result.error);

    yield put(actions.registerSuccess(result.token));
  } catch ({message, error}) {
    yield put(actions.registerFailure(error || message))
  }
}

export function* registerSaga() {
  yield takeLatest(paths.REGISTER_REQUEST, requestRegister);
}