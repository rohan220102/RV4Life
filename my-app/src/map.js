import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-97.113020);
  const [lat, setLat] = useState(32.733330);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: 10
    });
  });

  return (
    <div ref={mapContainer} className="map-container" />
  );
}