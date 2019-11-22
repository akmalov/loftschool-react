import React, {Fragment} from 'react';
import {CircularProgress, Box} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  box: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .8)',
  },
};

const Preloader = ({show, classes}) => (
  <Fragment>
    {show && (
      <Box className={classes.box}>
        <CircularProgress/>
      </Box>
    )}
  </Fragment>
);

export default withStyles(styles)(Preloader);