import {createAction} from 'redux-actions';

import * as paths from './paths';

export const initCreateCard = createAction(paths.INIT);

export const fetchCardRequest = createAction(paths.FETCH_REQUEST);
export const fetchCardSuccess = createAction(paths.FETCH_SUCCESS);
export const fetchCardFailure = createAction(paths.FETCH_FAILURE);

export const createCardRequest = createAction(paths.CREATE_REQUEST);
export const createCardSuccess = createAction(paths.CREATE_SUCCESS);
export const createCardFailure = createAction(paths.CREATE_FAILURE);