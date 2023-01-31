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
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from './Tab.js'
import Box from '@mui/material/Box';
import colors from '../colors.js'

import { ThemeProvider, createTheme } from '@mui/material/styles';

// styling materialui theme for tab bar
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary
    }
  }
})

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Sidebar({results, setResults, stops, setStops, onSelect, onAdd}) {
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

  /***** Tabs *****/
  const [tab, setTab] = React.useState(0);
  const handleTabChange = (event, newTab) => {
    setTab(newTab);
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
          <ThemeProvider theme={theme}>
            <Box sx={{width: '100%'}}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs
                  centered
                  value={tab} 
                  onChange={handleTabChange}
                  aria-label='suggestions and current trip tabs'
                >
                  <Tab label="Next Stops" {...a11yProps(0)} />
                  <Tab label="Current Trip" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={tab} index={0}>
                <div id="result-container" tabIndex={-1}>
                <Results results={results} onSelect={onSelect} onAdd={onAdd}/>
                </div>
              </TabPanel>
              <TabPanel value={tab} index={1}>
              <div id="result-container" tabIndex={-1}>
                {stops.length === 0 ? (<h5 style={{margin: 0, marginTop: "0.5em", color: "black"}}>You have no stops in your current trip.</h5>) : (<Results results={stops}></Results>)}
                </div>
              </TabPanel>
            </Box>
          </ThemeProvider>
        </div>

      </div>
    </Menu>
  );
}