import React from 'react';
import {render} from '@testing-library/react';

import Map from './Map';

describe('Map', () => {
  it('should render without errors', () => {
    const {queryByTestId} = render(<Map/>);
    expect(queryByTestId('map')).toBeTruthy();
  });
});