import React, { useRef, useEffect, useState } from 'react';
import Sidebar from './sidebar'
import Map from './map'

export default function App() {
  return (
    <div className="App" id={"app-container"}>
      <div className="topnav">
        <a className="active" href="#home" id="rvlife">RVLIFE</a>
        <a className="active" href="#home" id="planner">PLANNER</a>
      </div>
      <Sidebar pageWrapId={'page-wrap'} autofocus outerContainerId={'app-container'} />
      <Map/>
    </div>
  );
}