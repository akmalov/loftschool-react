import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from '../AuthContext/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      exact
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: "/", state: {from: props.location}}}/>
        )
      }
    />
  );
};

export default PrivateRoute;