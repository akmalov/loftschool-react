import React, {useContext, useState} from "react";
import {Typography, Box, TextField, Button} from '@material-ui/core';
import Auth from '../../../common/containers/Auth/Auth';
import PropTypes from "prop-types";
import {useHistory, Link} from "react-router-dom";
import serverConfig from '../../../common/serverConfig/serverConfig';
import {AuthContext} from "../../../common/AuthContext/AuthContext";

export const Login = () => {
  const [user, setUser] = useState({email: "", password: ""});
  const {login} = useContext(AuthContext);
  const history = useHistory();

  const onLoginSubmit = user => event => {
    event.preventDefault();
    serverConfig.post("/auth", user)
      .then(response => {
        login(user);
        history.push("/map");
        localStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onInputChange = event => {
    let input = event.target;
    setUser({...user, [input.name]: input.value});
  };

  return (
    <Auth>
      <Typography variant="h5" component="h3">Войти</Typography>
      <Box mt={1}>
        <Typography variant="body1">
          Новый пользователь? <Link to="/" data-testid="to-signup">Зарегистрируйтесь</Link>
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
    </Auth>
  );
};

export default Login;

Login.propTypes = {
  setPage: PropTypes.func
};