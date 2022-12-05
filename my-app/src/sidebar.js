import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css'
import search from './search'

export default props => {
    return (
    
    <Menu>
      <div className="menu-item" class="text-input">
        <div class="icon">
            <img src={require("./media/pin1.png")} className="pin-icon"/>
        </div>
        <input class="input" placeholder="Starting Location"></input>
      </div>  
      
      <div className="menu-item" class="text-input">
        <div class="icon">
            <img src={require("./media/pin1.png")} className="pin-icon"/>
        </div>
        <input class="input" placeholder="Destination"></input>
      </div>
      <button onClick={search} className="menu-item" class="submit-btn">
        SEARCH
      </button>  
    </Menu>
  );
};