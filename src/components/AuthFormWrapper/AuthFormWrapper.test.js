import React from 'react';
import {render} from '@testing-library/react';
import AuthFormWrapper from './AuthFormWrapper';

describe('AuthFormWrapper', () => {
  it('should render without errors', () => {
    const {queryByTestId} = render(
      <AuthFormWrapper>
        <div data-testid="pages"/>
      </AuthFormWrapper>
    );

    expect(queryByTestId('pages')).toBeTruthy();
  });
});