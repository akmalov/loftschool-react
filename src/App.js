import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';

import Auth from './pages/Auth.js';
import Layout from './common/Layout.js';
import theme from './theme';

class App extends Component {
  state = {
    showAuthPage: true,
    showMainPage: false,
  };

  onAuthSubmit = event => {
    event.preventDefault();

    this.setState({ showMainPage: true, showAuthPage: false });
  };

  onSignOut = () => {
    this.setState({ showMainPage: false, showAuthPage: true });
  };

  render() {
    const { showAuthPage, showMainPage } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        {showAuthPage && <Auth onAuthSubmit={this.onAuthSubmit} />}
        {showMainPage && <Layout onSignOut={this.onSignOut} />}
      </MuiThemeProvider>
    );
  }
}

export default App;