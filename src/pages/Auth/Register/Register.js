import React, {Fragment, useEffect} from 'react';
import {Typography, Box, Grid, Button, Link} from '@material-ui/core';
import {Link as RouterLink, Redirect} from 'react-router-dom';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import Auth from '../../../common/containers/Auth/Auth';
import FormikInput from '../../../common/components/FormikInput/FormikInput';
import pageTitleService from "../../../common/settings/pageTitleService/pageTitleService";

function Register({registerError, onSubmitRegister, isRegisterSubmitted }) {
  useEffect(() => {
    pageTitleService("Регистрация");
    return () => pageTitleService();
  });

  if (isRegisterSubmitted) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      <Typography variant="h5" component="h3">
        Регистрация
      </Typography>
      <Box mt={1}>
        <Typography variant="body1"><span>Уже зарегистрирован? </span>
          <Link component={RouterLink} to="/login">
            Войти
          </Link>
        </Typography>
      </Box>
      <Formik
        initialValues={{ email: '', password: '', name: '', surname: '' }}
        onSubmit={onSubmitRegister}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Введите email')
            .required('Это обязательное поле'),
          password: Yup.string()
            .min(6, 'Пароль должен состоять минимум из 6 символов')
            .required('Это обязательное поле'),
          name: Yup.string()
            .required('Это обязательное поле'),
          surname: Yup.string()
            .required('Это обязательное поле'),
        })}>
        <Form data-testid="register">
          <FormikInput
            margin="normal"
            label="Адрес электронной почты"
            type="email"
            name="email"
            fullWidth
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormikInput
                margin="normal"
                label="Имя"
                name="name"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <FormikInput
                fullWidth
                margin="normal"
                label="Фамилия"
                name="surname"
              />
            </Grid>
          </Grid>
          <FormikInput
            fullWidth
            margin="normal"
            label="Пароль"
            type="password"
            name="password"
            errorMessage={registerError}
          />
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" type="submit">Зарегистрироваться</Button>
          </Box>
        </Form>
      </Formik>
    </Fragment>
  );
}

export default Auth(Register);