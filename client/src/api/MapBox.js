import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1Ijoib2xkZXRvd25kZXYiLCJhIjoiY2tucGVpemN6MDF3bTJ2cXAwcWN6ajN0MCJ9.xuXc-tBveJGQ3te0rLZb_A';

const MapBox = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-105.0689);
  const [lat, setLat] = useState(39.7979);
  const [zoom, setZoom] = useState(13);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/oldetowndev/cknpeppgj3m1217l8qzvk5k7v',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default MapBox;