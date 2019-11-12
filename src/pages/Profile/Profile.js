import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Paper, Box, Typography, TextField, Grid, Button} from '@material-ui/core';
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {withStyles} from '@material-ui/core/styles';
import DateFnsUtils from "@date-io/date-fns";
import PropTypes from 'prop-types';

import {cardPostRequest} from '../../redux/bankCard';
import {getBankCard} from '../../redux/bankCard/selectors';
import {getLogin} from '../../redux/login/selectors';
import Header from "../../common/components/Header/Header";
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
  state = {
    expiryDate: new Date(),
    cardName: '',
    cardNumber: '',
    cvc: '',
  };

  onDateChange = (expiryDate) => {
    this.setState({expiryDate});
  };

  onInputChange = event => {
    let input = event.target;
    this.setState({[input.name]: input.value});
  };

  onCardNumberChange = event => {
    const {value} = event.target;
    this.setState({cardNumber: value.replace(/(\d{4}(?!\s))/g, '$1 ').trim()});
  };

  onCardSubmit = event => {
    event.preventDefault();
    const {cardPostRequest} = this.props;
    cardPostRequest(this.state);
  };

  render() {
    const {classes, bankCard: {isLoading}} = this.props;
    const {expiryDate, cardNumber, cardName, cvc} = this.state;

    return (
      <>
        <Header/>
        <div data-testid="profile" className={classes.background}>
          <Box pt={5} display="flex" justifyContent="center">
            <Paper>
              <Box px={4} py={5} display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h4">
                  Профиль
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text}>
                  Способ оплаты
                </Typography>
                <Box mt={5}>
                  <form noValidate onSubmit={this.onCardSubmit}>
                    <Grid container spacing={4}>
                      <Grid item xs={6}>
                        <Paper className={classes.paper}>
                          <Box display="flex" justifyContent="space-around" flexDirection="column" height="100%">
                            <TextField fullWidth label="Номер карты" placeholder="0000 0000 0000 0000"
                                       name="cardNumber" value={cardNumber} onChange={this.onCardNumberChange}
                                       InputLabelProps={{shrink: true}} inputProps={{maxLength: 19}} required
                            />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <DatePicker format="MM/yy" label="Срок действия" minDate={new Date()}
                                          maxDate={new Date("2028-12-01")} name="expiryDate" value={expiryDate}
                                          onChange={this.onDateChange} required
                              />
                            </MuiPickersUtilsProvider>
                          </Box>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper className={classes.paper}>
                          <Box display="flex" justifyContent="space-around" flexDirection="column" height="100%">
                            <TextField fullWidth label="Имя владельца" placeholder="ИМЯ ВЛАДЕЛЬЦА" name="cardName"
                                       value={cardName} onChange={this.onInputChange}
                                       InputLabelProps={{shrink: true}}
                                       required
                            />
                            <TextField fullWidth label="CVC" placeholder="000" name="cvc" value={cvc}
                                       onChange={this.onInputChange}
                                       InputLabelProps={{shrink: true}} inputProps={{maxLength: 3}} required
                            />
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Box mt={5} display="flex" justifyContent="center">
                      <Button variant="contained" type="submit" disabled={isLoading}>Сохранить</Button>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Paper>
          </Box>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  login: getLogin(state),
  bankCard: getBankCard(state),
});

Profile.propTypes = {
  classes: PropTypes.shape({
    text: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
  }).isRequired,
  cardPostRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {cardPostRequest})(withStyles(styles)(Profile));