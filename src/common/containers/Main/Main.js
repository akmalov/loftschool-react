import React from 'react';
import {Route, Switch} from "react-router-dom";

import {AuthProvider} from "../../AuthContext/AuthContext"
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

import SignUp from '../../../pages/Auth/SignUp/SignUp';
import Login from '../../../pages/Auth/Login/Login';
import Map from '../../../pages/Map/Map';
import Profile from '../../../pages/Profile/Profile';
import Page404 from '../../../pages/404/Page404';

const Main = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" component={SignUp} exact/>
        <Route path="/login" component={Login} exact/>
        <PrivateRoute path="/map" component={Map}/>
        <PrivateRoute path="/profile" component={Profile}/>
        <Route component={Page404}/>
      </Switch>
    </AuthProvider>
  )
};

export default Main;