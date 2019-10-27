import React, { Component } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

class Auth extends Component {
  state = {
    showSignIn: true,
    showSignUp: false,
  };

  onChangeToSignUp = event => {
    event.preventDefault();

    this.setState({ showSignIn: false, showSignUp: true });
  };

  onChangeToSignIn = event => {
    event.preventDefault();

    this.setState({ showSignIn: true, showSignUp: false });
  };

  render() {
    const { classes, onAuthSubmit } = this.props;
    const { showSignIn, showSignUp } = this.state;

    return (
      <Box display="flex" height="100%" className={classes.background}>
        <Container maxWidth="md">
          <Grid container className={classes.grid} alignItems="center">
            <Grid item xs={6}>
              <Box display="flex" justifyContent="center">
                <img src={logo} alt="Лого"/>
              </Box>
            </Grid>
            <Grid item xs={6}>
              {showSignIn && <Login onSignInSubmit={onAuthSubmit} onChangeToSignUp={this.onChangeToSignUp} />}
              {showSignUp && <SignUp onSignUpSubmit={onAuthSubmit} onChangeToSignIn={this.onChangeToSignIn} />}
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default withStyles(styles)(Auth);