import React from 'react';
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './css/sidebar.css'
import Search from './search'
import ColoredLine from './coloredLine';
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
    <Menu id={"sidebar"} noOverlay isOpen={true} width={'25%'} customBurgerIcon={<OpenMenuBtn/>} customCrossIcon={<CloseMenuBtn/>}>
      <div className="topnav">
        <a className="active" href="#home" id="rvlife">RVLIFE</a>
        <a className="active" href="#home" id="planner">PLANNER</a>
      </div>

      <ColoredLine color='var(--grey)'></ColoredLine>

      <div className="menu-item text-input">
        <div id="icon">
          <img src={require("./media/pin1.png")} className="pin-icon" />
        </div>
        <input className="input" id="start-input" placeholder="Starting Location" onChange={handleChange} onKeyDown={handleKeyDown}></input>
      </div>
      
      <div className="menu-item results-container">
        <p id="results"></p>
      </div>
    </Menu>
  );
}