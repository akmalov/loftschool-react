import React, {useContext, useState} from "react";
import {Typography, Box, TextField, Grid, Button} from '@material-ui/core';
import Auth from '../../../common/Auth/Auth';
import PropTypes from "prop-types";
import {useHistory, Link} from "react-router-dom";

import {AuthContext} from "../../../common/AuthContext/AuthContext";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    surname: "",
    password: ""
  });
  const context = useContext(AuthContext);
  const history = useHistory();

  const onInputChange = event => {
    let input = event.target;
    setUser({...user, [input.name]: input.value});
  };

  const onSignUpSubmit = user => event => {
    event.preventDefault();
    history.push("/map");
    context.login(user);
  };

  return (
    <Auth>
      <Typography variant="h5" component="h3">Регистрация</Typography>
      <Box mt={1}>
        <Typography variant="body1">
          Уже зарегистрирован? <Link to="/login" data-testid="to-login">Войти</Link>
        </Typography>
      </Box>
      <form noValidate onSubmit={onSignUpSubmit(user)} data-testid="signup">
        <TextField fullWidth margin="normal" label="Адрес электронной почты" required type="email"
                   onChange={onInputChange}/>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth margin="normal" label="Имя" required
                       onChange={onInputChange}/>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth margin="normal" label="Фамилия" required
                       onChange={onInputChange}/>
          </Grid>
        </Grid>
        <TextField fullWidth margin="normal" label="Пароль" required type="password"
                   onChange={onInputChange}/>
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button variant="contained" type="submit">Зарегистрироваться</Button>
        </Box>
      </form>
    </Auth>
  );
};

export default SignUp;

SignUp.propTypes = {
  setPage: PropTypes.func
};