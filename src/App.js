import React, {useState} from 'react';
import {MuiThemeProvider} from '@material-ui/core';

import Auth from './pages/Auth.js';
import Layout from './common/Layout.js';
import theme from './theme';

function App() {
  const [showAuthPage, setAuthPage] = useState(true);
  const [showMainPage, setMainPage] = useState(false);

  const onAuthSubmit = event => {
    event.preventDefault();
    setMainPage(true);
    setAuthPage(false);
  };

  const onSignOut = () => {
    setMainPage(false);
    setAuthPage(true);
  };

  return (
    <MuiThemeProvider theme={theme}>
      {showAuthPage && <Auth onAuthSubmit={onAuthSubmit}/>}
      {showMainPage && <Layout onSignOut={onSignOut}/>}
    </MuiThemeProvider>
  );
}

export default App;