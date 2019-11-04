import React, {useContext, useState} from 'react';
import {Container, Grid, Box} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {AuthContext} from "../AuthContext/AuthContext";

import Login from "../../pages/Auth/Login/Login";
import SignUp from '../../pages/Auth/SignUp/SignUp';
import background from '../../images/background.jpg';
import logo from '../../images/logo-intro.png';

const styles = {
  background: {
    background: `url(${background}) 0 0 no-repeat / cover`,
  },
  grid: {
    height: '100%',
  },
};

function Auth(props) {
  const context = useContext(AuthContext);
  const [showLogin, setLogin] = useState(true);

  const onChangeToSignUp = event => {
    event.preventDefault();
    setLogin(false);
  };

  const onChangeToLogin = event => {
    event.preventDefault();
    setLogin(true);
  };

  const onAuthSubmit = user => event => {
    event.preventDefault();
    context.login(user);
  };

  return (
    <Box display="flex" height="100%" className={props.classes.background}>
      <Container maxWidth="md">
        <Grid container className={props.classes.grid} alignItems="center">
          <Grid item xs={6}>
            <Box display="flex" justifyContent="center">
              <img src={logo} alt="Лого"/>
            </Box>
          </Grid>
          <Grid item xs={6}>
            {showLogin && <Login onLoginSubmit={onAuthSubmit} onChangeToSignUp={onChangeToSignUp}/>}
            {!showLogin && <SignUp onSignUpSubmit={onAuthSubmit} onChangeToLogin={onChangeToLogin}/>}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

Auth.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Auth);