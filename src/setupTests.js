import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router';
import {Provider} from 'react-redux';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn()
  })),
  NavigationControl: jest.fn()
}));

global.renderWithRouter = function (children, store) {
  let container = render(
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );

  return {
    ...container,
    store
  };
};

export default undefined;