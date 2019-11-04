import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Auth from './Auth';

describe('Auth', () => {
  it('should render login after init', () => {
    const {queryByTestId} = render(<Auth/>);

    expect(queryByTestId('login')).toBeTruthy();
  });

  it('should not render signup after init', () => {
    const {queryByTestId} = render(<Auth/>);

    expect(queryByTestId('signup')).toBeFalsy();
  });

  it('should render signup after click on link', () => {
    const {getByTestId, queryByTestId} = render(<Auth/>);

    expect(queryByTestId('login')).toBeTruthy();
    expect(queryByTestId('signup')).toBeFalsy();
    fireEvent.click(getByTestId('to-signup'));
    expect(queryByTestId('signup')).toBeTruthy();
    expect(queryByTestId('login')).toBeFalsy();
  });

  it('should render login after click on link', () => {
    const {getByTestId, queryByTestId} = render(<Auth/>);

    expect(queryByTestId('login')).toBeTruthy();
    expect(queryByTestId('signup')).toBeFalsy();
    fireEvent.click(getByTestId('to-signup'));
    expect(queryByTestId('signup')).toBeTruthy();
    expect(queryByTestId('login')).toBeFalsy();
    fireEvent.click(getByTestId('to-login'));
    expect(queryByTestId('login')).toBeTruthy();
    expect(queryByTestId('signup')).toBeFalsy();
  });
});