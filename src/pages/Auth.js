import React, { useState } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Login from './Login';
import SignUp from './SignUp';
import background from '../images/background.jpg';
import logo from '../images/logo-intro.png';

const styles = {
  background: {
    background: `url(${background}) 0 0 no-repeat / cover`,
  },
  grid: {
    height: '100%',
  },
};

function Auth (props) {
  const [showSignIn, setSignIn] = useState(true);
  const [showSignUp, setSignUp] = useState(false);

  const onChangeToSignUp = event => {
    event.preventDefault();

    setSignIn(false);
    setSignUp(true);
  };

  const onChangeToSignIn = event => {
    event.preventDefault();

    setSignIn(true);
    setSignUp(false);
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
            {showSignIn && <Login onSignInSubmit={props.onAuthSubmit} onChangeToSignUp={onChangeToSignUp} />}
            {showSignUp && <SignUp onSignUpSubmit={props.onAuthSubmit} onChangeToSignIn={onChangeToSignIn} />}
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