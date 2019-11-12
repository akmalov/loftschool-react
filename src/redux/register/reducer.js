import {handleActions} from 'redux-actions';

import * as actions from './actions';

export default handleActions({
  [actions.registerRequest](state) {
    return {
      ...state,
      isLoading: true,
      token: null,
      error: null
    };
  },
  [actions.registerSuccess](state, {payload}) {
    return {
      ...state,
      isLoading: false,
      token: payload,
      error: null
    };
  },
  [actions.registerFailure](state, {payload}) {
    return {
      ...state,
      isLoading: false,
      token: null,
      error: payload
    };
  },
}, {isLoading: false, token: null, error: null, isLoggedIn: false});