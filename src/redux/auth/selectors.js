export const getAuth = state => state.auth;
export const getLogin = state => getAuth(state).login;
export const getRegister = state => getAuth(state).register;