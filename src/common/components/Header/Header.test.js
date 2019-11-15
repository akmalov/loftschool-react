import React from 'react';
import {render, wait} from '@testing-library/react';
import {createStore, applyMiddleware} from "redux";
import {fireEvent} from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

import rootReducer from "../../../redux";
import Header from "./Header";
import App from "../../containers/App/App";

import {loginRequest, loginSuccess, logout} from "../../../redux/login";

describe('Header', () => {
  it('should render without errors', () => {
    let store = createStore(rootReducer);

    const {queryByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      </Provider>);

    expect(queryByTestId('header')).toBeTruthy();
  });

  it("should open pages after click on its links", () => {
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

        wait(() => getByTestId("map")).then(
          () => {
            let toProfileLink = getByTestId("button-profile");
            fireEvent.submit(toProfileLink);
            wait(() => getByTestId("profile")).then(
              () => {
                let toMapLink = getByTestId("button-map");
                fireEvent.submit(toMapLink);
                return wait(() => getByTestId("map"));
              }
            );
          }
        );
      }
    );
  });

  it("should logout", () => {
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
        }));

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

        wait(() => getByTestId("map")).then(
          () => {
            let logoutLink = getByTestId("button-logout");
            fireEvent.submit(logoutLink);
            return wait(() => getByTestId("login"));
          }
        );
      }
    );
  });
});