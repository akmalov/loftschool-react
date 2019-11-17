import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import {connect} from 'react-redux';

import {getRoutes} from '../../redux/map';
import {createRoute} from './createRoutes';

class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWttb2wiLCJhIjoiY2syYzliM3JvMDhreTNkcW1zeGpzaDJiNCJ9.DjN3mPc5_NFq5G3a2MzGZQ';

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.315912, 59.939035],
      zoom: 12,
    });
  }

  componentDidUpdate(prevProps) {
    const {routes: {coords}} = this.props;

    if (prevProps.routes.coords !== coords) {
      createRoute(this.map, coords);
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
    };

    return <div data-testid="mapbox"
                style={style}
                ref={el => this.mapContainer = el}/>;
  }
}

const mapDispatchToProps = state => ({
  routes: getRoutes(state),
});

export default connect(mapDispatchToProps)(Map);