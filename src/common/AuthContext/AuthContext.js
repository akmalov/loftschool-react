import React, {Component} from "react";

const AuthContext = React.createContext({isLoggedIn: false});

class AuthProvider extends Component {
  state = {isLoggedIn: false};

  login = () => {
    this.setState({isLoggedIn: true});
  };

  logout = () => {
    localStorage.clear();
    this.setState({isLoggedIn: false});
  };

  render() {
    const {isLoggedIn} = this.state;
    const init = {
      isLoggedIn,
      login: this.login,
      logout: this.logout,
    };

    return (
      <AuthContext.Provider value={init}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export {AuthContext, AuthProvider};