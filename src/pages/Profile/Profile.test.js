import React from 'react';
import {render} from '@testing-library/react';

import Profile from './Profile';

describe('Profile', () => {
  it('should render without errors', () => {
    const {queryByTestId} = render(<Profile/>);

    expect(queryByTestId('profile')).toBeTruthy();
  });
});