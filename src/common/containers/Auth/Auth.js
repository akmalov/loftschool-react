import React, {Component} from 'react';
import {Container, Grid, Box, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import background from '../../../assets/images/background.jpg';
import logo from '../../../assets/images/logo-intro.png';
import {getLogin, getRegister, loginRequest, registerRequest, initRegister} from '../../../redux/auth';

const styles = {
  background: {
    background: `url(${background}) 0 0 no-repeat / cover`,
  },
  grid: {
    height: '100%',
  },
};

const Auth = Wrapper => {
  class AuthLayout extends Component {
    componentDidMount() {
      const {register: {submitted}, initRegister} = this.props;

      if (submitted) {
        initRegister();
      }
    }

    onSubmitLogin = values => {
      this.props.loginRequest(values);
    };

    onSubmitRegister = values => {
      this.props.registerRequest(values);
    };

    render() {
      const {classes, login, register} = this.props;
      const {isLoggedIn, isLoading: loginIsLoading, error: loginError} = login;
      const {isLoading: registerIsLoading, error: registerError, submitted} = register;

      if (isLoggedIn) {
        return <Redirect to="/map"/>;
      }

      return (
        <Box data-testid="auth" display="flex" height="100%" className={classes.background}>
          <Container maxWidth="md">
            <Grid container className={classes.grid} alignItems="center">
              <Grid item xs={6}>
                <Box display="flex" justifyContent="center">
                  <img src={logo} alt="Лого"/>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Paper width={500} isLoading={loginIsLoading || registerIsLoading}>
                  <Wrapper
                    onSubmitLogin={this.onSubmitLogin}
                    onSubmitRegister={this.onSubmitRegister}
                    loginError={loginError}
                    registerError={registerError}
                    isRegisterSubmitted={submitted}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      );
    }
  }

  AuthLayout.propTypes = {
    classes: PropTypes.shape({
      grid: PropTypes.string.isRequired,
    }).isRequired,
    login: PropTypes.shape({
      isLoggedIn: PropTypes.bool.isRequired,
      isLoading: PropTypes.bool.isRequired,
      token: PropTypes.string,
    }).isRequired,
    register: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
    }).isRequired,
    loginRequest: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, {initRegister, loginRequest, registerRequest})(withStyles(styles)(AuthLayout));
};

const mapStateToProps = state => ({
  login: getLogin(state),
  register: getRegister(state),
});

export default Auth;