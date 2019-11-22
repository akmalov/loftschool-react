import React from 'react';
import {render} from '@testing-library/react';
import {createStore, applyMiddleware} from "redux";
import {fireEvent, wait} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import rootReducer from "../../../redux/reducer";
import App from "../../../common/containers/App/App"
import Register from './Register';

import {registerRequest, registerSuccess} from "../../../redux/auth";

describe('Register', () => {
  it('should render without errors', () => {
    let store = createStore(rootReducer);

    const {queryByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <Register/>
        </BrowserRouter>
      </Provider>
    );
    expect(queryByTestId('register')).toBeTruthy();
  });

  it("should register", () => {
    let store = createStore(
      rootReducer,
      applyMiddleware(store => next => action => {
        if (action.type === registerRequest.toString()) {
          expect(action.payload).toStrictEqual({
            email: "test123@test.com",
            password: "123123",
            name: "Test",
            surname: "Testov"
          });
          return store.dispatch(registerSuccess());
        }
        return next(action);
      })
    );

    let {getByTestId, getByText} = render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>);

    fireEvent.change(getByTestId("registerEmail"), {
      target: {value: "test123@test.com"}
    });

    fireEvent.change(getByTestId("registerPassword"), {
      target: {value: "123123"}
    });

    fireEvent.change(getByTestId("registerName"), {
      target: {value: "Test"}
    });

    fireEvent.change(getByTestId("registerSurname"), {
      target: {value: "Testov"}
    });

    let registerButton = getByTestId("registerSubmitButton");
    fireEvent.submit(registerButton);

    return wait(() => console.log('success'));
  });
});