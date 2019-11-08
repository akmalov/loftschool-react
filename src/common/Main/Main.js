import React from 'react';
import {Route, Switch} from "react-router-dom";

import SignUp from '../../pages/Auth/SignUp/SignUp';
import Login from '../../pages/Auth/Login/Login';
import Map from '../../pages/Map/Map';
import Profile from '../../pages/Profile/Profile';
import Page404 from '../../pages/404/Page404';

const Main = () => {
  return (
    <Switch>
      <Route path="/" component={SignUp} exact/>
      <Route path="/login" component={Login} exact/>
      <Route path="/map" component={Map}/>
      <Route path="/profile" component={Profile}/>
      <Route component={Page404}/>
    </Switch>
  )
};

export default Main;