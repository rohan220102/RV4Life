import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../css/sidebar.css'
import Header from './Header';
import SearchBar from './SearchBar';
import Search from '../search'
import ColoredLine from './ColoredLine';
import Results from './Results.js';
import { ReactComponent as CloseMenuBtn } from '../media/left_arrow.svg';
import { ReactComponent as OpenMenuBtn } from '../media/right_arrow.svg';
import PinIcon from '../media/pin1.png';

export default function Sidebar({results, setResults, onSelect, onAdd}) {
  console.log("Rendering sidebar");

  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState('');
  
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      setUpdated(message);
      Search({setResults});
    }
  };

  return (
    <Menu id={"sidebar"} noOverlay isOpen={true} width={'23em'} customBurgerIcon={<OpenMenuBtn/>} customCrossIcon={<CloseMenuBtn/>} tabIndex={-1} disableAutoFocus>
      <div className='box' tabIndex={-1}>
        <div className='head' id="search-container" tabIndex={-1}>
          <Header/>
          <ColoredLine color='var(--grey)' tabIndex={-1}/>
          <SearchBar icon={PinIcon} handleChange={handleChange} handleKeyDown={handleKeyDown}/>
        </div>
        
        <div className='content' id="scroll-container" tabIndex={-1}>
          <div id="result-container" tabIndex={-1}>
            {/* {props.results.map((r, index) => (
              <Card key={index} selected={r.selected} title={r.title} rating={r.rating} detour={r.detour} visited={r.visited} temp={r.temp}></Card>
            ))} */}
            <Results results={results} onSelect={onSelect} onAdd={onAdd}/>
          </div>
        </div>

      </div>
    </Menu>
  );
}