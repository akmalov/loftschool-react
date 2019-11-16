import {createAction} from 'redux-actions';

import * as paths from './paths';

export const loginVerification = createAction(paths.LOGIN_VERIFICATION);

export const logout = createAction(paths.LOGIN_LOGOUT);

export const loginRequest = createAction(paths.LOGIN_REQUEST);
export const loginSuccess = createAction(paths.LOGIN_SUCCESS);
export const loginFailure = createAction(paths.LOGIN_FAILURE);

export const registerRequest = createAction(paths.REGISTER_REQUEST);
export const registerSuccess = createAction(paths.REGISTER_SUCCESS);
export const registerFailure = createAction(paths.REGISTER_FAILURE);

export const initRegister = createAction(paths.REGISTER_INIT);