import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Login from '../../../pages/Auth/Login/Login';
import Register from '../../../pages/Auth/Register/Register';
import PrivateRoute from '../../settings/PrivateRoute/PrivateRoute';
import Main from '../Main/Main';

const App = (props) => (
  <Switch>
    <Route exact path="/">
      {props.isLoggedIn ? <Redirect to="/map"/> : <Redirect to="/register"/>}
    </Route>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <PrivateRoute path="/main" component={Main} />
    <Redirect to="/map"/>
  </Switch>
);

export default App;