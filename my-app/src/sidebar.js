import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './css/sidebar.css'
import Search from './search'

export default function Sidebar(props) {
  console.log("Rendering Sidebar");

  return (
    <Menu id={"sidebar"} noOverlay isOpen={true} width={380}>
      <div className="menu-item text-input">
        <div id="icon">
          <img src={require("./media/pin1.png")} className="pin-icon" />
        </div>
        <input className="input" id="start-input" placeholder="Starting Location"></input>
      </div>

      <div className="menu-item results-container">
        <p id="results"></p>
      </div>
    </Menu>
  );
}