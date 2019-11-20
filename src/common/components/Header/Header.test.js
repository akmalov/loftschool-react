import React from 'react';
import {createStore} from "redux";
import {fireEvent} from "@testing-library/react";

import rootReducer from "../../../redux/auth";
import Header from "./Header";

import {loginSuccess} from "../../../redux/auth";

describe('Header', () => {
  it('should render without errors', () => {
    let store = createStore(rootReducer);
    let {getByTestId} = renderWithRouter(<Header/>, store);
    store.dispatch(loginSuccess());
    fireEvent.click(getByTestId('button-map'));
    expect(getByTestId('header')).toBeTruthy();
  });
});