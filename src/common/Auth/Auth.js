import React from 'react';
import {Container, Grid, Box, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import background from '../../images/background.jpg';
import logo from '../../images/logo-intro.png';

const styles = {
  background: {
    background: `url(${background}) 0 0 no-repeat / cover`,
  },
  grid: {
    height: '100%',
  },
};

function Auth(props) {
  return (
    <Box display="flex" height="100%" className={props.classes.background}>
      <Container maxWidth="md">
        <Grid container className={props.classes.grid} alignItems="center">
          <Grid item xs={6}>
            <Box display="flex" justifyContent="center">
              <img src={logo} alt="Лого"/>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Paper><Box px={4} py={5}>{props.children}</Box></Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

Auth.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Auth);