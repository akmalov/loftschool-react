import React from "react";
import {AppBar, Toolbar, Box, Button} from '@material-ui/core';
import {NavLink, withRouter} from "react-router-dom";
import PropTypes from 'prop-types';

import logo from '../../../assets/images/logo.png';

const Header = ({onLogout, match}) => {
  return (
    <AppBar position="static" data-testid="header">
      <Toolbar>
        <div>
          <img src={logo} alt="Лого"/>;
        </div>
        <Box ml="auto">
          <Button component={NavLink} to={`${match.url}/map`} data-testid='button-map'>
            Карта
          </Button>
          <Button component={NavLink} to={`${match.url}/profile`} data-testid='button-profile'>
            Профиль
          </Button>
          <Button onClick={onLogout} data-testid='button-logout'>
            Выйти
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default withRouter(Header);