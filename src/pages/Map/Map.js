import React, {useState, useEffect, useRef} from 'react';
import mapboxgl from "mapbox-gl";

const style = {
  position: 'absolute',
  top: 64,
  bottom: 0,
  width: '100%',
  height: window.innerHeight - 64,
};

function Map() {
  const [lng] = useState(30.315912);
  const [lat] = useState(59.939035);
  const [zoom] = useState(12);
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWttb2wiLCJhIjoiY2syYzliM3JvMDhreTNkcW1zeGpzaDJiNCJ9.DjN3mPc5_NFq5G3a2MzGZQ';
    const initializeMap = ({setMap, mapContainer}) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [lng, lat],
        zoom: zoom
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({setMap, mapContainer});
  }, [lng, lat, zoom, map]);

  useEffect(() => {
    if (map) {
      return () => {
        map.remove();
      }
    }
  });

  return <div data-testid="map" ref={el => (mapContainer.current = el)} style={style}/>;
}

export default Map;