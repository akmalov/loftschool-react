import React, {useState, useContext} from 'react';
import {AuthContext} from "../common/AuthContext";

import Header from './Header';
import Map from '../pages/Map/Map';
import Profile from '../pages/Profile';
import Auth from "../components/Auth";

function Layout() {
  const context = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(context.isLoggedIn);
  const [showMap, setMap] = useState(true);
  const [showProfilePage, setProfilePage] = useState(false);
  const onChangePage = route => event => {
    event.preventDefault();
    if (route === 'map') {
      setProfilePage(false);
      setMap(true);
    } else if (route === 'profile') {
      setMap(false);
      setProfilePage(true);
    } else if (route === 'signOut') {
      context.logout();
      setIsLoggedIn(context.isLoggedIn);
    }
  };

  const onAuthSubmit = user => event => {
    context.login(user);
    setIsLoggedIn(context.isLoggedIn);
  };

  if (isLoggedIn) {
    return (
      <>
        <Header onChangePage={onChangePage}/>
        {showMap && <Map/>}
        {showProfilePage && <Profile/>}
      </>
    )
  } else {
    return (
      <>
        <Auth onAuthSubmit={onAuthSubmit}/>
      </>
    )
  }
}

export default Layout;