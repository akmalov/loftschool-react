import React from 'react';
import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core';

const FormikDatePicker = ({form: {setFieldValue}, field: {name, value}, ...rest}) => {
  return (
    <Autocomplete
      {...rest}
      filterSelectedOptions
      autoComplete
      value={value}
      name={name}
      onChange={value => {
        setFieldValue(name, value.currentTarget.textContent);
      }}
      renderInput={params => (
        <TextField {...params} placeholder={value} margin="normal" fullWidth/>
      )}
    />
  );
};

export default FormikDatePicker;
