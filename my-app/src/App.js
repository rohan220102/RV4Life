import React, { useRef, useEffect, useState } from 'react';
import Sidebar from './sidebar'
import Map from './map'

export default function App() {
  const [geojson, setGeojson] = useState(null);
  console.log("Rendering Application");
  
  return (
    <div className="App" id={"app-container"}>
      <div className="topnav">
        <a className="active" href="#home" id="rvlife">RVLIFE</a>
        <a className="active" href="#home" id="planner">PLANNER</a>
      </div>
      <Sidebar pageWrapId={'page-wrap'} geojson={geojson} setGeojson={setGeojson} outerContainerId={'app-container'}/>
      <Map geojson={geojson} setGeojson={setGeojson}/>
    </div>
  );
}