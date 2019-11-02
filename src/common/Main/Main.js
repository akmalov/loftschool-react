import React, {useContext} from 'react';

import Auth from '../Auth/Auth';
import Layout from '../Layout/Layout';
import {AuthContext} from '../AuthContext/AuthContext';

const Main = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return isLoggedIn ? <Layout/> : <Auth/>;
};

export default Main;