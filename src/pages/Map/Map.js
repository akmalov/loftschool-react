import React, { Component } from 'react';
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiYWttb2wiLCJhIjoiY2syYzliM3JvMDhreTNkcW1zeGpzaDJiNCJ9.DjN3mPc5_NFq5G3a2MzGZQ';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 30.315912,
      lat: 59.939035,
      zoom: 12
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: 64,
      bottom: 0,
      width: '100%',
      height: window.innerHeight - 64,
    };

    return (
      <div style={style} ref={el => this.mapContainer = el} />
    );
  }
}

export default Map;