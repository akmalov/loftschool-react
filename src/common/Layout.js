import React, { Component } from 'react';

import Header from './Header';
import MapPage from '../pages/Map/MapPage';
import Profile from '../pages/Profile';

const routesMap = {
  map: { showMapPage: true, showProfilePage: false },
  profile: { showMapPage: false, showProfilePage: true },
};

class Layout extends Component {
  state = {
    showMapPage: true,
    showProfilePage: false,
  };

  onChangePage = route => event => {
    event.preventDefault();

    if (route === 'signOut') {
      this.props.onSignOut();

      return;
    }

    this.setState(routesMap[route]);
  };

  render() {
    const { showMapPage, showProfilePage } = this.state;

    return (
      <>
        <Header onChangePage={this.onChangePage} />
        {showMapPage && <MapPage />}
        {showProfilePage && <Profile />}
      </>
    );
  }
}
export default Layout;