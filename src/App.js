import React, { useState } from 'react';
import Sidebar from './components/Sidebar'
import Map from './components/Map'

export default function App() {
  const [results, setResults] = useState([]);

  console.log("Rendering Application");
  
  const selectCard = (id) => {
    console.log(id);
  } 

  return (
    <div className="App" id={"app-container"}>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'app-container'} results={results} setResults={setResults} onSelect={selectCard}/>
      <Map data={results} setData={setResults}/>
    </div>
  );
}