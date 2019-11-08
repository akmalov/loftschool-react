import React, {useContext} from "react";
import {AppBar, Toolbar, Box, Button} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import logo from '../../images/logo.png';
import {AuthContext} from "../AuthContext/AuthContext";

export const links = [
  {id: 0, value: 'Карта', route: 'map'},
  {id: 1, value: 'Профиль', route: 'profile'},
  {id: 2, value: 'Выйти', route: 'logout'},
];

const Header = () => {
  const {logout} = useContext(AuthContext);

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
          <Button onClick={logout} data-testid='button-logout'>
            Выйти
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;