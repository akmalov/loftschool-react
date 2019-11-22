import {createSelector} from 'reselect';

export const getAuth = state => state.auth;
export const getLogin = state => getAuth(state).login;
export const getRegister = state => getAuth(state).register;

export const selectAuth = createSelector(
  getAuth, (authState) => authState.isLoading
);

export const selectLogin = createSelector(
  getLogin, (loginState) => loginState.isLoggedIn
);

export const selectRegister = createSelector(
  getRegister, (registerState) => registerState.submitted
);