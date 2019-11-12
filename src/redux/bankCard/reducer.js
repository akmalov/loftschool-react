import {handleActions} from 'redux-actions';

import * as actions from './actions';

export default handleActions({
  [actions.cardPostRequest](state, {payload}) {
    return {
      isLoading: true,
      error: null,
      expiryDate: new Date('2019-12'),
      cardName: '',
      cardNumber: '',
      cvc: ''
    };
  },
  [actions.cardPostSuccess](state, {payload}) {
    return {
      isLoading: false,
      error: null,
      expiryDate: payload.expiryDate,
      cardName: payload.cardName,
      cardNumber: payload.cardNumber,
      cvc: payload.cvc
    };
  },
  [actions.cardPostFailure](state, {payload}) {
    return {
      isLoading: false,
      error: payload,
      expiryDate: new Date('2019-12'),
      cardName: '',
      cardNumber: '',
      cvc: ''
    };
  },
}, {isLoading: false, error: null, expiryDate: new Date('2019-12'), cardName: '', cardNumber: '', cvc: ''});