import React from "react";
import {render, wait} from '@testing-library/react';
import {createStore, applyMiddleware} from "redux";
import {fireEvent} from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

import rootReducer from "../../redux";
import {cardPostRequest} from "../../redux/bankCard";
import Profile from "./Profile";

describe('Profile', () => {
  it('should render without errors', () => {
    let store = createStore(rootReducer);

    const {queryByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile/>
        </BrowserRouter>
      </Provider>);

    expect(queryByTestId('profile')).toBeTruthy();
  });

  it("should submit form after click on button", () => {
    let store = createStore(
      rootReducer,
      applyMiddleware(store => next => action => {
        if (action.type === cardPostRequest.toString()) {
          return Promise.resolve();
        }
        return next(action);
      })
    );

    let {getByText, getByPlaceholderText, getByDisplayValue} = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile/>
        </BrowserRouter>
      </Provider>);

    fireEvent.change(getByPlaceholderText("0000 0000 0000 0000"), {
      target: {value: "1111 1111 1111 1111"}
    });

    fireEvent.change(getByDisplayValue("11/19"), {
      target: {value: "05/23"}
    });

    fireEvent.change(getByPlaceholderText("ИМЯ ВЛАДЕЛЬЦА"), {
      target: {value: "Test Testov"}
    });

    fireEvent.change(getByPlaceholderText("000"), {
      target: {value: "123"}
    });

    let saveButton = getByText("Сохранить");

    fireEvent.submit(saveButton);

    return wait(() => console.log('success'));
  });
});