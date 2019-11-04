import React, {useState} from "react";
import {Typography, Box, Link, TextField, Button} from '@material-ui/core';
import AuthFormWrapper from '../../../components/AuthFormWrapper/AuthFormWrapper';
import PropTypes from "prop-types";

export const Login = ({onLoginSubmit, onChangeToSignUp}) => {
  const [user, setUser] = useState({email: "", password: ""});

  const onInputChange = event => {
    let input = event.target;
    setUser({...user, [input.name]: input.value});
  };

  return (
    <AuthFormWrapper>
      <Typography variant="h5" component="h3">Войти</Typography>
      <Box mt={1}>
        <Typography variant="body1">
          Новый пользователь? <Link href="#" onClick={onChangeToSignUp} data-testid="to-signup">Зарегистрируйтесь</Link>
        </Typography>
      </Box>
      <form noValidate onSubmit={onLoginSubmit(user)} data-testid="login">
        <TextField fullWidth margin="normal" name="email" label="Имя пользователя" required
                   onChange={onInputChange}/>
        <TextField fullWidth margin="normal" name="password" label="Пароль" required type="password"
                   onChange={onInputChange}/>
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button variant="contained" type="submit">Войти</Button>
        </Box>
      </form>
    </AuthFormWrapper>
  );
};

export default Login;

Login.propTypes = {
  setPage: PropTypes.func
};