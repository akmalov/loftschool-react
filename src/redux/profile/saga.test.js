import {call, put} from 'redux-saga/effects';
import {createProfile, fetchProfile} from './saga';

import * as actions from './actions';

describe('test for createProfile saga', () => {
  const gen = createProfile({payload: {card: 'name'}});

  it('calls action', () => {
    expect(JSON.stringify(gen.next().value)).toEqual(JSON.stringify(call(createProfile, {card: 'name'})))
  });

  it('dispatches success action', () => {
    expect(gen.next({card: 'name'}).value)
      .toEqual(put(actions.createCardSuccess({card: 'name'})))
  });
});

describe('test for fetchProfile saga', () => {
  const gen = fetchProfile({payload: {card: 'name'}});

  it('calls action', () => {
    expect(JSON.stringify(gen.next().value)).toEqual(JSON.stringify(call(fetchProfile, {card: 'name'})))
  });

  it('dispatches success action', () => {
    expect(gen.next({card: 'name'}).value)
      .toEqual(put(actions.fetchCardSuccess({card: 'name'})))
  });
});