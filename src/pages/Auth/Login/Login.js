import React, {Component} from "react";
import {Typography, Box, TextField, Button, Link} from '@material-ui/core';
import PropTypes from "prop-types";
import {Link as RouterLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {getLogin, loginRequest} from '../../../redux/login';
import Auth from '../../../common/containers/Auth/Auth';
import pageTitleService from "../../../common/settings/pageTitleService/pageTitleService";

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    pageTitleService("Авторизация");
    return () => pageTitleService();
  }

  onInputChange = event => {
    let input = event.target;
    this.setState({[input.name]: input.value});
  };

  onLoginSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      const {loginRequest} = this.props;
      loginRequest(this.state);
    }
  };

  render() {
    const {login: {isLoading, isLoggedIn}} = this.props;

    if (isLoggedIn) {
      return <Redirect to="/map"/>;
    }

    return (
      <Auth>
        <Typography variant="h5" component="h3">Войти</Typography>
        <Box mt={1}>
          <Typography variant="body1">
            Новый пользователь? <Link component={RouterLink} to="/register"
                                      data-testid="to-register">Зарегистрируйтесь</Link>
          </Typography>
        </Box>
        <form noValidate onSubmit={this.onLoginSubmit} data-testid="login">
          <TextField data-testid="loginEmail" fullWidth margin="normal" name="email" label="Имя пользователя" required
                     onChange={this.onInputChange}/>
          <TextField data-testid="loginPassword" fullWidth margin="normal" name="password" label="Пароль" required type="password"
                     onChange={this.onInputChange}/>
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button data-testid="loginSubmitButton" variant="contained" type="submit" disabled={isLoading}>Войти</Button>
          </Box>
        </form>
      </Auth>
    );
  }
}

const mapStateToProps = state => ({
  login: getLogin(state),
});

Login.propTypes = {
  login: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    token: PropTypes.string,
  }).isRequired,
  loginRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {loginRequest})(Login);
