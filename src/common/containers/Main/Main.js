import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';

import {logout, getLogin} from '../../../redux/auth';
import Header from '../../components/Header/Header';
import Map from '../../../pages/Map/Map';
import Profile from '../../../pages/Profile/Profile';
import {fetchCardRequest} from '../../../redux/profile';

class Main extends Component {
  componentDidMount() {
    const {login: {token}, fetchCardRequest} = this.props;

    fetchCardRequest(token);
  }

  onLogout = event => {
    event.preventDefault();
    const {logout} = this.props;
    logout();
  };

  render() {
    const {match} = this.props;
    return (
      <div data-testid="main">
        <Header onLogout={this.onLogout}/>
        <Switch>
          <Route path={`${match.path}/map`} component={Map}/>
          <Route path={`${match.path}/profile`} component={Profile}/>
          <Redirect to={`${match.path}/map`}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: getLogin(state),
});

Main.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {logout, fetchCardRequest})(Main);
