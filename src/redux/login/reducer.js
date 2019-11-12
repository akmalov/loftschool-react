import {handleActions} from 'redux-actions';

import * as actions from './actions';

export default handleActions({
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
    if (localStorage.getItem('token') !== payload) {
      localStorage.setItem('token', payload);
    }

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
}, {isLoading: false, token: null, error: null, isLoggedIn: false});
