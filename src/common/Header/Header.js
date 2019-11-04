import React from "react";
import {AppBar, Toolbar, Box, Button} from '@material-ui/core';
import logo from '../../images/logo.png';

export const links = [
  {id: 0, value: 'Карта', route: 'map'},
  {id: 1, value: 'Профиль', route: 'profile'},
  {id: 2, value: 'Выйти', route: 'signOut'},
];

const Header = ({onChangePage}) => {
  return (
    <AppBar position="static" data-testid="header">
      <Toolbar>
        <div>
          <img src={logo} alt="Лого"/>;
        </div>
        <Box ml="auto">
          {links.map(({id, value, route}) => (
            <Button key={id} onClick={onChangePage(route)} data-testid={['button', route].join('-')}>
              {value}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;