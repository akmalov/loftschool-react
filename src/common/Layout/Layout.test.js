import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {links} from '../Header/Header';
import Layout from './Layout';

describe('Layout', () => {
  it('should show login after init', () => {
    const {queryByTestId} = render(<Layout/>);
    expect(queryByTestId('map')).toBeTruthy();
  });

  it('after click on link map should render map', () => {
    const {queryByTestId, getByTestId} = render(<Layout/>);
    const {route: mapRoute} = links[0];
    const {route: profileRoute} = links[1];
    fireEvent.click(getByTestId(`button-${profileRoute}`));
    expect(queryByTestId('map')).toBeFalsy();

    fireEvent.click(getByTestId(`button-${mapRoute}`));
    expect(queryByTestId('map')).toBeTruthy();
  });

  it('after click on link profile should render profile', () => {
    const {queryByTestId, getByTestId} = render(<Layout/>);
    const {route} = links[1];

    fireEvent.click(getByTestId(`button-${route}`));
    expect(queryByTestId('profile')).toBeTruthy();
    expect(queryByTestId('map')).toBeFalsy();
  });
});