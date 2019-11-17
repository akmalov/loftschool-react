import React from 'react';
import {Paper, Box} from '@material-ui/core';
import Spinner from '../../components/Preloader/Preloader';

const WrapperContainer = ({children, isLoading, width, ...restProps}) => (
  <Box
    position="relative"
    px={3}
    py={5}
    display="inline-flex"
    justifyContent="center"
    flexDirection="column"
    width={width}>
    <Paper>
      <Box px={6} py={6} position="relative" {...restProps}>
        {children}
        <Spinner show={isLoading}/>
      </Box>
    </Paper>
  </Box>
);

export default WrapperContainer;