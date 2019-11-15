import React from 'react';
import {render} from '@testing-library/react';
import {createStore, applyMiddleware} from "redux";
import {fireEvent, wait} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import rootReducer from "../../../redux";
import App from "../../../common/containers/App/App"
import Login from './Login';

import {loginRequest, loginSuccess} from "../../../redux/login";

describe('Login', () => {
  it('should render without errors', () => {
    let store = createStore(rootReducer);

    const {queryByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login/>
        </BrowserRouter>
      </Provider>
    );
    expect(queryByTestId('login')).toBeTruthy();
  });

  it("should authenticate and redirect to map page", () => {
    let store = createStore(
      rootReducer,
      applyMiddleware(store => next => action => {
        if (action.type === loginRequest.toString()) {
          expect(action.payload).toStrictEqual({
            email: "test@test.com",
            password: "123123"
          });
          return store.dispatch(loginSuccess());
        }
        return next(action);
      })
    );

    let {getByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>);

    let toLoginLink = getByTestId("to-login");
    fireEvent.submit(toLoginLink);

    wait(() => getByTestId("login")).then(
      () => {
        fireEvent.change(getByTestId("loginEmail"), {
          target: {value: "test@test.com"}
        });

        fireEvent.change(getByTestId("loginPassword"), {
          target: {value: "123123"}
        });

        let loginSubmitButton = getByTestId("loginSubmitButton");
        fireEvent.submit(loginSubmitButton);

        return wait(() => getByTestId("map"));
      }
    );
  });
});