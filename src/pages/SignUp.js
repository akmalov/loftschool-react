import React from 'react';
import { Typography, Box, Link, TextField, Grid, Button } from '@material-ui/core';

import AuthFormWrapper from '../components/AuthFormWrapper';

const SignUp = ({ onChangeToSignIn, onSignUpSubmit }) => (
  <AuthFormWrapper>
    <Typography variant="h5" component="h3">Регистрация</Typography>
    <Box mt={1}>
      <Typography variant="body1">
        Уже зарегистрирован? <Link href="#" onClick={onChangeToSignIn}>Войти</Link>
      </Typography>
    </Box>
    <form noValidate onSubmit={onSignUpSubmit}>
      <TextField fullWidth margin="normal" label="Адрес электронной почты" required type="email" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth margin="normal" label="Имя" required />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth margin="normal" label="Фамилия" required />
        </Grid>
      </Grid>
      <TextField fullWidth margin="normal" label="Пароль" required type="password" />
      <Box mt={3} display="flex" justifyContent="flex-end">
        <Button variant="contained" type="submit">Зарегистрироваться</Button>
      </Box>
    </form>
  </AuthFormWrapper>
);

export default SignUp;