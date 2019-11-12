import {handleActions} from 'redux-actions';

import * as actions from './actions';

export default handleActions({
  [actions.registerRequest](state) {
    return {
      ...state,
      isLoading: true,
      token: null,
      error: null,
      isLoggedIn: false
    };
  },
  [actions.registerSuccess](state, {payload}) {
    if (localStorage.getItem('token') !== payload) {
      localStorage.setItem('token', payload);
    }

    return {
      ...state,
      isLoading: false,
      token: payload,
      error: null,
      isLoggedIn: true
    };
  },
  [actions.registerFailure](state, {payload}) {
    return {
      ...state,
      isLoading: false,
      token: null,
      error: payload,
      isLoggedIn: false
    };
  },
}, {isLoading: false, token: null, error: null, isLoggedIn: false});