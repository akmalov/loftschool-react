import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Typography, Button, Box, Paper} from '@material-ui/core';
import {Link} from 'react-router-dom';

import MapForm from './MapForm';
import MapBox from './MapBox';
import {getProfile} from '../../redux/profile';
import {getAddresses, fetchRoutesRequest, initMap, getRoutes} from '../../redux/map';
import pageTitleService from "../../common/settings/pageTitleService/pageTitleService";

class Map extends Component {
  componentDidMount() {
    this.props.initMap();
    pageTitleService("Карта");
  };

  onSubmitAddresses = values => {
    const {addressFrom, addressTo} = values;
    this.props.fetchRoutesRequest({addressFrom, addressTo});
  };

  orderAgain = () => {
    this.props.initMap();
  };

  render() {
    const {profile, addresses: addressesList, routes: {submitted}} = this.props;
    const {card, isLoading: isProfileLoading} = profile;
    const {addresses, isLoading: isAddressesLoading} = addressesList;
    const isFormShown = !submitted && (!!card || isProfileLoading);
    const isProfileMessageShown = !card && !isProfileLoading && !submitted;

    if (!isProfileLoading && !isAddressesLoading) {
      return (
        <div data-testid="map" style={{position: 'relative', paddingTop: "50px"}}>
          <MapBox/>
          <Box display="flex" justifyContent="flex-start" style={{marginLeft: "50px"}}>
            <Paper style={{zIndex: 1000}}>

              <Box width={650} px={4} py={5}>
                {isFormShown && (
                  <MapForm
                    addresses={addresses}
                    onSubmitAddresses={this.onSubmitAddresses}
                  />
                )}

                {isProfileMessageShown && (
                  <Fragment>
                    <Box mb={4}>
                      <Typography variant="h4">
                        Заполните платежные данные
                      </Typography>
                    </Box>
                    <Box mb={4}>
                      <Typography variant="body1">
                        Укажите информацию о банковской карте, чтобы сделать заказ.
                      </Typography>
                    </Box>
                    <Button variant="contained" to="/cabinet/profile" component={Link} fullWidth>
                      Перейти в профиль
                    </Button>
                  </Fragment>
                )}

                {submitted && (
                  <Fragment>
                    <Box mb={4}>
                      <Typography variant="h4">
                        Спасибо за заказ, такси скоро приедет!
                      </Typography>
                    </Box>
                    <Button variant="contained" fullWidth onClick={this.orderAgain}>
                      Заказать снова
                    </Button>
                  </Fragment>
                )}
              </Box>
            </Paper>
          </Box>
        </div>
      );
    } else {
      return (
        <div data-testid="map" style={{position: 'relative', paddingTop: "50px"}}>
          <MapBox/>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  profile: getProfile(state),
  addresses: getAddresses(state),
  routes: getRoutes(state),
});

export default connect(mapStateToProps, {fetchRoutesRequest, initMap})(Map);
