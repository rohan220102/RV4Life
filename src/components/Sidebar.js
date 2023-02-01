import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "../css/sidebar.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Search from "../search";
import ColoredLine from "./ColoredLine";
import { ReactComponent as CloseMenuBtn } from "../media/left_arrow.svg";
import { ReactComponent as OpenMenuBtn } from "../media/right_arrow.svg";
import Box from "@mui/material/Box";
import colors from "../colors.js";
import UnstyledTabsCustomized from "./Tabs";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tabs from "./Tabs";

export default function Sidebar({
  results,
  setResults,
  stops,
  setStops,
  selectResult,
  selectStop,
  addToTrip,
  setView,
}) {
  console.log("Rendering sidebar");
  const [updated, setUpdated] = useState("");
  const [message, setMessage] = useState("");
  const [userInput, setUserInput] = useState({ input: {}, date: "" });

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  /***** Tabs *****/
  const [tab, setTab] = React.useState(0);
  const handleTabChange = (event, newTab) => {
    setTab(newTab);
    setView(newTab);
  };

  return (
    <Menu
      id={"sidebar"}
      noOverlay
      isOpen={true}
      width={"23em"}
      customBurgerIcon={<OpenMenuBtn />}
      customCrossIcon={<CloseMenuBtn />}
      tabIndex={-1}
      disableAutoFocus
    >
      <div id="search-container" tabIndex={-1}>
        <Header />
        <ColoredLine color="var(--grey)" tabIndex={-1} />
        <SearchBar
          userInput={userInput}
          setUserInput={setUserInput}
          setResults={setResults}
        />
      </div>
      <div id="tab-container">
        <Tabs
          results={results}
          selectResult={selectResult}
          addToTrip={addToTrip}
          stops={stops}
          selectStop={selectStop}
        ></Tabs>
      </div>
    </Menu>
  );
}

// styling materialui theme for tab bar
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
