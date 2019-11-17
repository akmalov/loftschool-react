import {handleActions} from 'redux-actions';

import * as actions from './actions';

const initialState = {isLoading: false, error: null, card: null, submitted: false};

export default handleActions({
  [actions.initCreateCard](state) {
    return {
      ...state,
      submitted: false,
    };
  },
  [actions.createCardRequest](state) {
    return {
      ...state,
      isLoading: true,
      error: null,
      submitted: false,
    };
  },
  [actions.createCardSuccess](state, {payload}) {
    return {
      ...state,
      card: payload,
      isLoading: false,
      error: null,
      submitted: true,
    };
  },
  [actions.createCardFailure](state, {payload}) {
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  },
  [actions.fetchCardRequest](state) {
    return {
      ...state,
      isLoading: true,
      error: null,
      submitted: false,
      card: null,
    };
  },
  [actions.fetchCardSuccess](state, {payload}) {
    return {
      ...state,
      card: payload,
      isLoading: false,
      error: null,
    };
  },
  [actions.fetchCardFailure](state, {payload}) {
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  },
}, initialState);
