import React from 'react';
import ReactDOM from 'react-dom';
import {compose, applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core';

import './index.css';
import App from './common/containers/App/App';
import reducers from './redux';
import {loginMiddleware} from './redux/login';
import {registerMiddleware} from './redux/register';
import {loginSuccess} from './redux/login';
import theme from './common/settings/theme';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(loginMiddleware),
    applyMiddleware(registerMiddleware)
  ),
);
const token = localStorage.getItem('token');

if (token) {
  store.dispatch(loginSuccess(token));
}

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
