import React from 'react';
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './css/sidebar.css'
import Search from './search'
import ColoredLine from './coloredLine';
import Card from './card'
import {ReactComponent as CloseMenuBtn} from './media/left_arrow.svg';
import {ReactComponent as OpenMenuBtn} from './media/right_arrow.svg';

export default function Sidebar(props) {
  console.log("Rendering Sidebar");

  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState('');
  const [menuBtn, setMenuBtn] = useState("400px")

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      setUpdated(message);
      Search(props.setGeojson)
    }
  };

  return (
    <Menu id={"sidebar"} noOverlay isOpen={true} width={'23em'} customBurgerIcon={<OpenMenuBtn/>} customCrossIcon={<CloseMenuBtn/>}>
      <div className='box'>
        <div className='head' id="search-container">
          <div className="topnav">
            <a className="active" href="#home" id="rvlife">RVLIFE</a>
            <a className="active" href="#home" id="planner">PLANNER</a>
          </div>

          <ColoredLine color='var(--grey)'></ColoredLine>

          <div className="text-input">
            <div id="icon">
              <img src={require("./media/pin1.png")} className="pin-icon" />
            </div>
            <input className="input" id="start-input" placeholder="Enter a starting location" onChange={handleChange} onKeyDown={handleKeyDown}></input>
          </div>
        </div>
        
        
        <div className='content' id="scroll-container">
          <div id="result-container">
            <Card selected={true} title='RV Life' rating='4.8' detour='6 min.' visited='251' temp='64'></Card>
            <Card title='Good Luck RV Park' rating='4.7' detour='15 min.' visited='158' temp='63'></Card>
            <Card title='Lakeridge Campgrounds' rating='4.3' detour='21 min.' visited='103' temp='64'></Card>
            <Card title='Bear Woods RV Park' rating='4.5' detour='26 min.' visited='88' temp='44'></Card>
            <Card title='Waxahachie RV Parks and Campgrounds' rating='4.4' detour='31 min.' visited='41' temp='44'></Card>
            <p id="results"></p>
          </div>
        </div>

        <div className='foot'/>
      </div>
    </Menu>
  );
}