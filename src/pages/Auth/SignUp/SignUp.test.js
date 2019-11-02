import React from 'react';
import {render} from '@testing-library/react';

import SignUp from './SignUp';

describe('SignUp', () => {
  it('should render without errors', () => {
    const {queryByTestId} = render(
      <SignUp onChangeToLogin={() => {
      }} onSignUpSubmit={() => {
      }}/>
    );
    expect(queryByTestId('signup')).toBeTruthy();
  });
});