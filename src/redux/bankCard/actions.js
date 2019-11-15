import {createAction} from 'redux-actions';

export const cardPostRequest = createAction('CARD_POST_REQUEST');
export const cardPostSuccess = createAction('CARD_POST_SUCCESS');
export const cardPostFailure = createAction('CARD_POST_FAILURE');