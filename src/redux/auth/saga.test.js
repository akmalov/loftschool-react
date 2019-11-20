import {call} from 'redux-saga/effects';
import {requestLogin, requestRegister} from './saga';

describe('test for requestLogin saga', () => {
  const gen = requestLogin({payload: {token: 'token'}});

  it('calls action', () => {
    expect(JSON.stringify(gen.next().value)).toEqual(JSON.stringify(call(requestLogin, {token: 'token'})));
  });
});

describe('test for requestRegister saga', () => {
  const gen = requestRegister({payload: {token: 'token'}});

  it('calls action', () => {
    expect(JSON.stringify(gen.next().value)).toEqual(JSON.stringify(call(requestRegister, {token: 'token'})))
  });
});