import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getLogin} from '../../../redux/login';

const PrivateRoute = (props) => {
  const {component: Component, login: {isLoggedIn}, ...rest} = props;

  return (
    <Route {...rest} render={routeProps => (
      isLoggedIn
        ? <Component {...routeProps} />
        : <Redirect to='/login'/>
    )}/>
  );
};

const mapStateToProps = state => ({
  login: getLogin(state),
});

PrivateRoute.propTypes = {
  login: PropTypes.shape({isLoggedIn: PropTypes.bool.isRequired}).isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(PrivateRoute);