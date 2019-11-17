import React from 'react';
import {Box, Button} from '@material-ui/core';
import {Formik, Form, Field} from 'formik';

import FormikAutocomplete from '../../common/components/FormikAutocomplete/FormikAutocomplete';

const AddressesForm = ({addresses, onSubmitAddresses}) => (
  <Formik
    initialValues={{addressFrom: 'Откуда', addressTo: 'Куда'}}
    onSubmit={onSubmitAddresses}>
    {({values: {addressFrom, addressTo}}) => (
      <Form noValidate>
        <Field
          component={FormikAutocomplete}
          placeholder="Откуда"
          name="addressFrom"
          options={addresses.filter(address => address !== addressTo)}
        />

        <Box py={1}>
          <Field
            component={FormikAutocomplete}
            placeholder="Куда"
            name="addressTo"
            options={addresses.filter(address => address !== addressFrom)}
          />
        </Box>

        <Box mt={4}>
          <Button variant="contained" type="submit" fullWidth disabled={!addressFrom || !addressTo}>
            Вызвать такси
          </Button>
        </Box>
      </Form>
    )}
  </Formik>
);

export default AddressesForm;