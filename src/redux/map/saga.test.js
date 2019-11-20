import {call, put} from 'redux-saga/effects';
import {fetchRoutes, fetchAddresses} from './saga';

import * as actions from './actions';

describe('test for fetchRoutes saga', () => {
  const gen = fetchRoutes({payload: {addressFrom: 'address1', addressTo: 'address2'}});

  it('calls action', () => {
    expect(JSON.stringify(gen.next().value)).toEqual(JSON.stringify(call(fetchRoutes, 'address1', 'address2')))
  });

  it('dispatches success action', () => {
    expect(gen.next({addressFrom: 'address1', addressTo: 'address2'}).value)
      .toEqual(put(actions.fetchRoutesSuccess({addressFrom: 'address1', addressTo: 'address2'})))
  });
});

describe('test for fetchAddresses saga', () => {
  const gen = fetchAddresses();

  it('calls action', () => {
    expect(JSON.stringify(gen.next().value)).toEqual(JSON.stringify(call(fetchAddresses)))
  });

  it('dispatches success action', () => {
    expect(gen.next({addresses: {addresses: ['address']}}).value)
      .toEqual(put(actions.fetchAddressesSuccess({addresses: ['address']})))
  });
});