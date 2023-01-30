import React, { useRef, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar'
import Map from './components/Map'

export default function App() {
  const [results, setResults] = useState([]);

  console.log("Rendering Application");
  
  return (
    <div className="App" id={"app-container"}>
      <Sidebar pageWrapId={'page-wrap'} results={results} setResults={setResults} outerContainerId={'app-container'}/>
      <Map data={results} setData={setResults}/>
    </div>
  );
}