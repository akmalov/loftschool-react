import React from 'react';
import {Paper, Box, Grid, Button} from '@material-ui/core';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

import FormikDatePicker from '../../common/components/FormikDatePicker/FormikDatePicker';
import FormikInput from '../../common/components/FormikInput/FormikInput';

const ProfileForm = ({card, handleSubmitProfile}) => {
  const values = {expiryDate: new Date(), cardNumber: '', cardName: '', cvc: ''};

  return (
    <Formik
      enableReinitialize
      initialValues={card || values}
      onSubmit={values => handleSubmitProfile(values)}
      validationSchema={Yup.object({
        cardNumber: Yup.string()
          .min(19, 'Введите 19 цифр')
          .required('Это обязательное поле'),
        cvc: Yup.string()
          .min(3, 'Введите 3 цифры')
          .required('Это обязательное поле'),
        cardName: Yup.string()
          .required('Это обязательное поле'),
      })}
    >
      {({values, isValid}) => (
        <Form>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Paper>
                <Box display="flex" justifyContent="space-around" flexDirection="column" width={300} height={190} px={4}
                     py={2}>
                  <FormikInput
                    fullWidth
                    label="Номер карты"
                    placeholder="0000 0000 0000 0000"
                    name="cardNumber"
                    value={values.cardNumber.replace(/(\d{4}(?!\s))/g, '$1 ').trim()}
                    InputLabelProps={{shrink: true}}
                    inputProps={{maxLength: 19}}
                  />

                  <Field component={FormikDatePicker} name="expiryDate" label="Срок действия"/>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <Box display="flex" justifyContent="space-around" flexDirection="column" width={300} height={190} px={4}
                     py={2}>
                  <FormikInput
                    fullWidth
                    label="Имя владельца"
                    placeholder="ИМЯ ВЛАДЕЛЬЦА"
                    name="cardName"
                    InputLabelProps={{shrink: true}}
                  />

                  <FormikInput
                    fullWidth
                    label="CVC"
                    placeholder="000"
                    name="cvc"
                    InputLabelProps={{shrink: true}}
                    inputProps={{maxLength: 3}}
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Box mt={4} display="flex" justifyContent="center">
            <Button variant="contained" type="submit" disabled={!isValid}>Сохранить</Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;