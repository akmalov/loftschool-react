import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

import * as actions from './actions';

const loginInitialState = {isLoading: false, token: null, error: null, isLoggedIn: false};
const registerInitialState = {isLoading: false, error: null, submitted: false};

const login = handleActions({
  [actions.loginVerification]() {
    const token = localStorage.getItem('token');

    return {
      token,
      isLoggedIn: !!token,
      isLoading: false,
      error: null,
    };
  },
  [actions.loginRequest](state) {
    return {
      ...state,
      isLoading: true,
      token: null,
      error: null,
      isLoggedIn: false,
    };
  },
  [actions.loginSuccess](state, {payload}) {
    localStorage.setItem('token', payload);

    return {
      ...state,
      isLoading: false,
      token: payload,
      error: null,
      isLoggedIn: true,
    };
  },
  [actions.loginFailure](state, {payload}) {
    return {
      ...state,
      isLoading: false,
      token: null,
      error: payload,
      isLoggedIn: false,
    };
  },
  [actions.logout](state) {
    localStorage.removeItem('token');

    return {
      ...state,
      isLoading: false,
      token: null,
      error: null,
      isLoggedIn: false,
    };
  }
}, loginInitialState);

const register = handleActions({
  [actions.initRegister](state) {
    return {
      ...state,
      submitted: false,
    }
  },
  [actions.registerRequest](state) {
    return {
      ...state,
      isLoading: true,
      error: null,
      submitted: false,
    };
  },
  [actions.registerSuccess](state) {
    return {
      ...state,
      isLoading: false,
      error: null,
      submitted: true,
    };
  },
  [actions.registerFailure](state, {payload}) {
    return {
      ...state,
      isLoading: false,
      error: payload,
      submitted: false,
    };
  },
}, registerInitialState);

export default combineReducers({
  login,
  register,
});
