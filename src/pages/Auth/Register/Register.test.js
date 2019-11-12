import React from 'react';
import {render} from '@testing-library/react';

import Register from './SignUp';

describe('Register', () => {
  it('should render without errors', () => {
    const {queryByTestId} = render(
      <Register onChangeToLogin={() => {
      }} onSignUpSubmit={() => {
      }}/>
    );
    expect(queryByTestId('signup')).toBeTruthy();
  });
});