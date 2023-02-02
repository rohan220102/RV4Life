// libraries
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

// components
import Header from "./Header";
import SearchBar from "./SearchBar";
import ColoredLine from "./ColoredLine";
import Tabs from "./Tabs";
import { ReactComponent as CloseMenuBtn } from "../media/left_arrow.svg";
import { ReactComponent as OpenMenuBtn } from "../media/right_arrow.svg";

// styles
import "../css/sidebar.css";

export default function Sidebar({
  results,
  setResults,
  selectResult,
  stops,
  setStops,
  selectStop,
  setView,
}) {
  console.log("Rendering sidebar");
  const [message, setMessage] = useState("");
  const [userInput, setUserInput] = useState({ input: {}, date: null });

  const handleTabChange = (event, newTab) => {
    setView(newTab);
  };

  return (
    <Menu
      noOverlay
      isOpen={true}
      width={"23em"}
      customBurgerIcon={<OpenMenuBtn />}
      customCrossIcon={<CloseMenuBtn />}
      tabIndex={-1}
      disableAutoFocus
    >
      <div className="box" tabIndex={-1}>
        <div className="head" id="search-container" tabIndex={-1}>
          <Header />
          <ColoredLine color="var(--grey)" tabIndex={-1} />
          <SearchBar
            userInput={userInput}
            setUserInput={setUserInput}
            setResults={setResults}
          />
        </div>
        <div className="content" id="tab-container">
          <Tabs
            results={results}
            selectResult={selectResult}
            stops={stops}
            selectStop={selectStop}
            setStops={setStops}
            onChange={handleTabChange}
          ></Tabs>
        </div>
      </div>
    </Menu>
  );
}
