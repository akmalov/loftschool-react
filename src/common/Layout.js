import React, {useState} from 'react';

import Header from './Header';
import MapPage from '../pages/Map/MapPage';
import Profile from '../pages/Profile';

function Layout(props) {
  const [showMapPage, setMapPage] = useState(true);
  const [showProfilePage, setProfilePage] = useState(false);

  const onChangePage = route => event => {
    event.preventDefault();
    if (route === 'signOut') {
      props.onSignOut();
    } else if (route === 'map') {
      setProfilePage(false);
      setMapPage(true);
    } else if (route === 'profile') {
      setMapPage(false);
      setProfilePage(true);
    }
  };

  return (
    <>
      <Header onChangePage={onChangePage}/>
      {showMapPage && <MapPage/>}
      {showProfilePage && <Profile/>}
    </>
  );

}

export default Layout;