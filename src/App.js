import React, { useState } from 'react';
import Sidebar from './components/Sidebar'
import Map from './components/Map'

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

  return (
    <div className="App" id={"app-container"}>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'app-container'} results={results} setResults={setResults} onSelect={selectCard}/>
      <Map data={results} setData={setResults}/>
    </div>
  );
}