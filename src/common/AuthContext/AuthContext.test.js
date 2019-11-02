import React, {Fragment} from 'react';
import {render, fireEvent} from '@testing-library/react';

import {AuthProvider, AuthContext} from './AuthContext';

const getAuthProvideMock = () => (
  <AuthProvider>
    <AuthContext.Consumer>
      {({isLoggedIn, login, logout}) => (
        <Fragment>
          <button type="button" data-testid="login" onClick={login}></button>
          <button type="button" data-testid="logout" onClick={logout}></button>
          <div data-testid="auth-context-child">
            isLoggedIn: {String(isLoggedIn)}
          </div>
        </Fragment>
      )}
    </AuthContext.Consumer>
  </AuthProvider>
);

describe('AuthContext', () => {
  it('isLoggedIn should equal false after init', () => {
    const {getByTestId} = render(getAuthProvideMock());

    expect(getByTestId('auth-context-child').textContent)
      .toEqual('isLoggedIn: false');
  });

  it('after call login isLoggedIn should equal true', () => {
    const {getByTestId} = render(getAuthProvideMock());

    fireEvent.click(getByTestId('login'));
    expect(getByTestId('auth-context-child').textContent)
      .toEqual('isLoggedIn: true');
  });

  it('after call login isLoggedIn should equal false', () => {
    const {getByTestId} = render(getAuthProvideMock());

    fireEvent.click(getByTestId('login'));
    expect(getByTestId('auth-context-child').textContent)
      .toEqual('isLoggedIn: true');

    fireEvent.click(getByTestId('logout'));
    expect(getByTestId('auth-context-child').textContent)
      .toEqual('isLoggedIn: false');
  });
});