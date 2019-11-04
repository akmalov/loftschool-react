import React, {useState, useContext} from 'react';
import {AuthContext} from "../AuthContext/AuthContext";

import Header from '../Header/Header';
import Map from '../../pages/Map/Map';
import Profile from '../../pages/Profile/Profile';

function Layout() {
  const context = useContext(AuthContext);
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
    }
  };

  return (
    <div data-testid="layout">
      <Header onChangePage={onChangePage}/>
      {showMap && <Map/>}
      {showProfilePage && <Profile/>}
    </div>
  );
}

export default Layout;