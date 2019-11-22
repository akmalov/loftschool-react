import React from 'react';
import {fireEvent} from '@testing-library/react';
import {createStore} from 'redux';
import rootReducer from '../../../redux/reducer';
import {loginSuccess} from '../../../redux/auth'

import App from './App';

describe('App', () => {
  describe('routing', () => {
    describe('user authorized', () => {
      it('should render map after click on to-map link', () => {
        let store = createStore(rootReducer);
        let {getByTestId} = renderWithRouter(<App/>, store);
        store.dispatch(loginSuccess());
        fireEvent.click(getByTestId('button-map'));
        expect(getByTestId('map')).toBeTruthy();
      });

      it('should render profile after click on to-profile link', () => {
        let store = createStore(rootReducer);
        let {getByTestId} = renderWithRouter(<App/>, store);
        store.dispatch(loginSuccess());
        fireEvent.click(getByTestId('button-profile'));
        expect(getByTestId('profile')).toBeTruthy();
      });

      it('should logout', () => {
        let store = createStore(rootReducer);
        let {getByTestId} = renderWithRouter(<App/>, store);
        store.dispatch(loginSuccess());
        fireEvent.click(getByTestId('button-logout'));
        expect(getByTestId('register')).toBeTruthy();
      });
    });

    describe('user is not authorized', () => {
      it('should render register after init', () => {
        let store = createStore(rootReducer);
        let {queryByTestId} = renderWithRouter(<App/>, store);
        expect(queryByTestId('register')).toBeTruthy();
      });

      it('should not render login after init', () => {
        let store = createStore(rootReducer);
        let {queryByTestId} = renderWithRouter(<App/>, store);
        expect(queryByTestId('login')).toBeFalsy();
      });

      it('should open login after click on to-login link', () => {
        let store = createStore(rootReducer);
        let {queryByTestId} = renderWithRouter(<App/>, store);
        expect(queryByTestId('login')).toBeFalsy();
        expect(queryByTestId('register')).toBeTruthy();
        fireEvent.click(queryByTestId('to-login'));
        expect(queryByTestId('register')).toBeFalsy();
        expect(queryByTestId('login')).toBeTruthy();
      });

      it('should open register after click on to-register link', () => {
        let store = createStore(rootReducer);
        let {queryByTestId} = renderWithRouter(<App/>, store);
        expect(queryByTestId('login')).toBeFalsy();
        expect(queryByTestId('register')).toBeTruthy();
        fireEvent.click(queryByTestId('to-login'));
        expect(queryByTestId('register')).toBeFalsy();
        expect(queryByTestId('login')).toBeTruthy();
        fireEvent.click(queryByTestId('to-register'));
        expect(queryByTestId('login')).toBeFalsy();
        expect(queryByTestId('register')).toBeTruthy();
      });
    });
  });
});
