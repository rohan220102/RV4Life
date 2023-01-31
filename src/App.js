import React, { useRef, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar'
import Map from './components/Map'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './css/map.css'

mapboxgl.accessToken = 'pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig';

export default function App() {
  const [results, setResults] = useState([]);

  console.log("Rendering Application");
  
  const selectCard = (id) => {
    setResults(
      results.map((result) =>
        result.id === id ? {...result, selected: true} :
        {...result, selected: false}
      )
    );
  }; 

  /*********************** MapBox ***********************/
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
    });
  });
  
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
 
  /*******************************************************/

  return (
    <div className="App" id={"app-container"}>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'app-container'} results={results} setResults={setResults} onSelect={selectCard}/>
      {/* <Map data={results} setData={setResults}/> */}  
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

