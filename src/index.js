import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core';

import './index.css';
import App from './common/containers/App/App';
import theme from './common/settings/theme';
import {loginVerification} from './redux/auth';
import store from './redux/store';

store.dispatch(loginVerification());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);