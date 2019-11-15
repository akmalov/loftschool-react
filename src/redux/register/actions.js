import {createAction} from 'redux-actions';

export const registerRequest = createAction('REGISTER_REQUEST');
export const registerSuccess = createAction('REGISTER_SUCCESS');
export const registerFailure = createAction('REGISTER_FAILURE');