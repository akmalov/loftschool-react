import React, {Fragment, useEffect} from 'react';
import {Typography, Box, Button, Link} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import Auth from '../../../common/containers/Auth/Auth';
import FormikInput from '../../../common/components/FormikInput/FormikInput';
import pageTitleService from "../../../common/settings/pageTitleService/pageTitleService";

function Login({loginError, onSubmitLogin}) {
  useEffect(() => {
    pageTitleService("Авторизация");
    return () => pageTitleService();
  });

  return (
    <Fragment>
      <Typography variant="h5" component="h3">Войти</Typography>
      <Box mt={1}>
        <Typography variant="body1"><span>Новый пользователь? </span>
          <Link component={RouterLink} to="/register">
            Зарегистрируйтесь
          </Link>
        </Typography>
      </Box>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={onSubmitLogin}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Введите email')
            .required('Это обязательное поле'),
          password: Yup.string()
            .min(6, 'Пароль должен состоять минимум из 6 символов')
            .required('Это обязательное поле'),
        })}
      >
        <Form data-testid="login">
          <FormikInput
            name="email"
            margin="normal"
            label="Email"
            fullWidth
          />
          <FormikInput
            name="password"
            margin="normal"
            label="Пароль"
            type="password"
            fullWidth
            errorMessage={loginError}
          />
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" type="submit">Войти</Button>
          </Box>
        </Form>
      </Formik>
    </Fragment>)
}

export default Auth(Login);