import {createAction} from 'redux-actions';

import * as paths from './paths';

export const initMap = createAction(paths.INIT);

export const fetchRoutesRequest = createAction(paths.FETCH_ROUTES_REQUEST);
export const fetchRoutesSuccess = createAction(paths.FETCH_ROUTES_SUCCESS);
export const fetchRoutesFailure = createAction(paths.FETCH_ROUTES_FAILURE);

export const fetchAddressesRequest = createAction(paths.FETCH_ADDRESSES_REQUEST);
export const fetchAddressesSuccess = createAction(paths.FETCH_ADDRESSES_SUCCESS);
export const fetchAddressesFailure = createAction(paths.FETCH_ADDRESSES_FAILURE);