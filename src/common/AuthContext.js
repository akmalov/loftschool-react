import React from "react";

class LoggedInStatusClass {
  constructor() {
    this.isLoggedIn = false;
  }

  login = (email, password) => {
    this.isLoggedIn = true;
  };

  logout = () => {
    this.isLoggedIn = false;
  };
}

const LoggedInStatus = new LoggedInStatusClass();

export const AuthContext = React.createContext();

export const AuthProvider = props => {
  return (
    <AuthContext.Provider value={LoggedInStatus}>
      {props.children}
    </AuthContext.Provider>
  );
};