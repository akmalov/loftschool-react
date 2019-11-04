import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {AuthProvider} from "../AuthContext/AuthContext";
import {links} from "../Header/Header";
import Main from "./Main";

it('after submit login form should login', () => {
  const {queryByTestId, getByTestId} = render(<AuthProvider><Main/></AuthProvider>);
  expect(queryByTestId('login')).toBeTruthy();
  fireEvent.submit(getByTestId('login'));
  expect(queryByTestId('header')).toBeTruthy();
  expect(queryByTestId('signup')).toBeFalsy();
  expect(queryByTestId('login')).toBeFalsy();
});

it('after submit signup form should login', () => {
  const {queryByTestId, getByTestId} = render(<AuthProvider><Main/></AuthProvider>);
  fireEvent.click(getByTestId('to-signup'));
  expect(queryByTestId('signup')).toBeTruthy();
  fireEvent.submit(getByTestId('signup'));
  expect(queryByTestId('header')).toBeTruthy();
  expect(queryByTestId('signup')).toBeFalsy();
  expect(queryByTestId('login')).toBeFalsy();
});

it('after click logout link should logout', () => {
  const {queryByTestId, getByTestId} = render(<AuthProvider><Main/></AuthProvider>);
  const {route} = links[2];
  fireEvent.submit(getByTestId('login'));
  fireEvent.click(getByTestId(`button-${route}`));
  expect(queryByTestId('profile')).toBeFalsy();
  expect(queryByTestId('map')).toBeFalsy();
  expect(queryByTestId('login')).toBeTruthy();
});