import React from 'react';
import {render} from '@testing-library/react';

import Auth from './Auth';

describe('Auth', () => {
  it('should render without errors', () => {
    const {queryByTestId} = render(<Auth/>);
    expect(queryByTestId('auth')).toBeTruthy();
  });
});