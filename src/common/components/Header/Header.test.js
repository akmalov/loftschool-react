import React from 'react';
import {render} from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('should render without errors', () => {
    const {queryByTestId} = render(<Header onChangePage={() => {
    }}/>);

    expect(queryByTestId('header')).toBeTruthy();
  });
});