import React, {useState} from "react";
import {Typography, Box, Link, TextField, Grid, Button} from '@material-ui/core';
import AuthFormWrapper from '../../../components/AuthFormWrapper/AuthFormWrapper';
import PropTypes from "prop-types";

const SignUp = ({onSignUpSubmit, onChangeToLogin}) => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    surname: "",
    password: ""
  });

  const onInputChange = event => {
    let input = event.target;
    setUser({...user, [input.name]: input.value});
  };

  return (
    <AuthFormWrapper>
      <Typography variant="h5" component="h3">Регистрация</Typography>
      <Box mt={1}>
        <Typography variant="body1">
          Уже зарегистрирован? <Link href="#" onClick={onChangeToLogin} data-testid="to-login">Войти</Link>
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
    </AuthFormWrapper>
  );
};

export default SignUp;

SignUp.propTypes = {
  setPage: PropTypes.func
};