import React, {Component} from 'react';
import {Box, Paper, Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';

import ProfileForm from './ProfileForm';
import {initCreateCard, createCardRequest, getProfile} from '../../redux/profile';
import {getLogin} from '../../redux/auth';
import background from "../../assets/images/background.jpg";

const styles = {
  background: {
    background: `url(${background}) 0 0 no-repeat / cover`,
  },
  text: {
    color: 'rgba(0, 0, 0, .5)',
  },
  paper: {
    width: '350px',
    height: '200px',
    padding: '20px 40px',
  },
};

class Profile extends Component {
  componentDidMount() {
    this.props.initCreateCard();
  }

  handleSubmitProfile = values => {
    const {createCardRequest, login} = this.props;

    createCardRequest({...values, token: login.token});
  };

  render() {
    const {classes, profile: {submitted, card}} = this.props;

    return (
      <div data-testid="profile-page" style={{display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "50px"}} className={classes.background}>
        <Box display="flex" justifyContent="center">
          <Paper>
            <Box px={4} py={5} display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4">
                Профиль
              </Typography>
              <Typography variant="body1" gutterBottom style={{color: '#999'}}>
                Способ оплаты
              </Typography>
              <Box mt={5}>
                {!submitted && <ProfileForm card={card} handleSubmitProfile={this.handleSubmitProfile}/>}

                {submitted && (
                  <Box align="center">
                    <Box mt={4} mb={10}>
                      <Typography variant="body1">
                        Платёжные данные обновлены. Теперь вы можете заказывать такси.
                      </Typography>
                    </Box>
                    <Button variant="contained" to="/cabinet/map" component={Link}>Перейти на карту</Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Paper>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: getProfile(state),
  login: getLogin(state),
});

export default connect(mapStateToProps, {initCreateCard, createCardRequest})(withStyles(styles)(Profile));