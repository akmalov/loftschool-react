import React from 'react';
import {render} from '@testing-library/react';

import Login from './Login';

describe('Login', () => {
  it('should render without errors', () => {
    const {queryByTestId} = render(
      <Login onChangeToSignUp={() => {
      }} onLoginSubmit={() => {
      }}/>
    );
    expect(queryByTestId('login')).toBeTruthy();
  });
});