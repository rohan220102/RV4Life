import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../css/sidebar.css'
import Header from './Header';
import SearchBar from './SearchBar';
import Search from '../search'
import ColoredLine from './ColoredLine';
import Card from './Card'
import { ReactComponent as CloseMenuBtn } from '../media/left_arrow.svg';
import { ReactComponent as OpenMenuBtn } from '../media/right_arrow.svg';
import PinIcon from '../media/pin1.png';

export default function Sidebar(props) {
  console.log("Rendering Sidebar");

  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState('');
  
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      setUpdated(message);
      Search(props.setGeojson, props.setResults);
    }
  };

  return (
    <Menu id={"sidebar"} noOverlay isOpen={true} width={'23em'} customBurgerIcon={<OpenMenuBtn/>} customCrossIcon={<CloseMenuBtn/>} tabIndex={-1} disableAutoFocus>
      <div className='box' tabIndex={-1}>
        <div className='head' id="search-container" tabIndex={-1}>
          <Header></Header>
          <ColoredLine color='var(--grey)' tabIndex={-1}></ColoredLine>
          <SearchBar icon={PinIcon} handleChange={handleChange} handleKeyDown={handleKeyDown}></SearchBar>
        </div>
        
        <div className='content' id="scroll-container" tabIndex={-1}>
          <div id="result-container">
            {props.results.map((r, index) => (
              <Card key={index} selected={r.selected} title={r.title} rating={r.rating} detour={r.detour} visited={r.visited} temp={r.temp}></Card>
            ))}
          </div>
        </div>

      </div>
    </Menu>
  );
}