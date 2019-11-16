import React from 'react';
import {TextField} from '@material-ui/core';
import {useField} from 'formik';

const FormikInput = ({errorMessage, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      error={!!meta.touched && !!(errorMessage || meta.error)}
      helperText={!!meta.touched && (errorMessage || meta.error)}
    />
  );
};

export default FormikInput;