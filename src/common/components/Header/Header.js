import React from "react";
import {AppBar, Toolbar, Box, Button} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import logo from '../../../assets/images/logo.png';
import PropTypes from 'prop-types';

const Header = ({onLogout}) => {
  return (
    <AppBar position="static" data-testid="header">
      <Toolbar>
        <div>
          <img src={logo} alt="Лого"/>;
        </div>
        <Box ml="auto">
          <Button component={NavLink} to="/map" data-testid='button-map'>
            Карта
          </Button>
          <Button component={NavLink} to="/profile" data-testid='button-profile'>
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

export default Header;