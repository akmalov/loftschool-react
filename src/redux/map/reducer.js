import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

import * as actions from './actions';

const routesInitialState = {isLoading: false, submitted: false, error: null, coords: []};
const addressesInitialState = {isLoading: false, error: null, addresses: []};

const routes = handleActions({
  [actions.initMap](state) {
    return {
      ...state,
      submitted: false,
    }
  },
  [actions.fetchRoutesRequest](state) {
    return {
      ...state,
      coords: [],
      isLoading: true,
      error: null,
      submitted: false,
    };
  },
  [actions.fetchRoutesSuccess](state, {payload}) {
    return {
      ...state,
      coords: payload,
      isLoading: false,
      error: null,
      submitted: true,
    };
  },
  [actions.fetchRoutesFailure](state, {payload}) {
    return {
      ...state,
      coords: [],
      isLoading: false,
      error: payload,
      submitted: false,
    };
  },
}, routesInitialState);

const addresses = handleActions({
  [actions.fetchAddressesRequest](state) {
    return {
      ...state,
      addresses: [],
      isLoading: true,
      error: null,
    };
  },
  [actions.fetchAddressesSuccess](state, {payload}) {
    return {
      ...state,
      addresses: payload,
      isLoading: false,
      error: null,
    };
  },
  [actions.fetchAddressesFailure](state, {payload}) {
    return {
      ...state,
      addresses: [],
      isLoading: false,
      error: payload,
    };
  },
}, addressesInitialState);

export default combineReducers({
  routes,
  addresses,
});