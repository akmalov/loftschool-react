import React, {Component} from "react";
import {Typography, Box, TextField, Grid, Button, Link} from '@material-ui/core';
import PropTypes from "prop-types";
import {Link as RouterLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {getRegister, registerRequest} from '../../../redux/register';
import {getLogin} from '../../../redux/login';
import Auth from '../../../common/containers/Auth/Auth';
import pageTitleService from "../../../common/settings/pageTitleService/pageTitleService";

class Register extends Component {
  state = {
    email: '',
    name: '',
    surname: '',
    password: '',
  };

  componentDidMount() {
    pageTitleService("Регистрация");
    return () => pageTitleService();
  }

  componentDidUpdate(prevProps) {
    const {register: {token}, history} = this.props;

    if (token && token !== prevProps.register.token) {
      history.push('/login');
    }
  }

  onInputChange = event => {
    let input = event.target;
    this.setState({[input.name]: input.value});
  };

  onRegisterSubmit = event => {
    event.preventDefault();
    const {registerRequest} = this.props;
    registerRequest(this.state);
  };

  render() {
    const {register: {isLoading}, login: {isLoggedIn}} = this.props;

    if (isLoggedIn) {
      return <Redirect to="/map"/>;
    }

    return (
      <Auth>
        <Typography variant="h5" component="h3">Регистрация</Typography>
        <Box mt={1}>
          <Typography variant="body1">
            Уже зарегистрирован? <Link component={RouterLink} to="/login" data-testid="to-login">Войти</Link>
          </Typography>
        </Box>
        <form noValidate onSubmit={this.onRegisterSubmit} data-testid="register">
          <TextField inputProps={{"data-testid": "registerEmail"}} fullWidth margin="normal" name="email" label="Адрес электронной почты" required
                     type="email" onChange={this.onInputChange}/>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField inputProps={{"data-testid": "registerName"}} fullWidth margin="normal" name="name" label="Имя" required
                         onChange={this.onInputChange}/>
            </Grid>
            <Grid item xs={6}>
              <TextField inputProps={{"data-testid": "registerSurname"}} fullWidth margin="normal" name="surname" label="Фамилия" required
                         onChange={this.onInputChange}/>
            </Grid>
          </Grid>
          <TextField inputProps={{"data-testid": "registerPassword"}} fullWidth margin="normal" name="password" label="Пароль" required type="password"
                     onChange={this.onInputChange}/>
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button data-testid="registerSubmitButton" variant="contained" type="submit" disabled={isLoading}>Зарегистрироваться</Button>
          </Box>
        </form>
      </Auth>
    );
  }
}

const mapStateToProps = state => ({
  register: getRegister(state),
  login: getLogin(state)
});

Register.propTypes = {
  register: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    token: PropTypes.string,
  }).isRequired,
  login: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
  }),
  registerRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {registerRequest})(Register);