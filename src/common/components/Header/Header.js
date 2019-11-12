import React, {Component} from "react";
import {AppBar, Toolbar, Box, Button} from '@material-ui/core';
import {NavLink} from "react-router-dom";

import logo from '../../../assets/images/logo.png';
import {getLogin, logout} from '../../../redux/login';
import {connect} from "react-redux";

class Header extends Component {
  onLogout = event => {
    event.preventDefault();
    const {logout} = this.props;
    logout();
  };

  render() {
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
            <Button onClick={this.onLogout} data-testid='button-logout'>
              Выйти
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  login: getLogin(state),
});

export default connect(mapStateToProps, {logout})(Header);