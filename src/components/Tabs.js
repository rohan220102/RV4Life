// libraries
import React from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/system";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";

// components
import Cards from "./Cards";

// styles
import "../css/tabs.css";

export default function Tabs({
  results,
  selectResult,
  stops,
  selectStop,
  setStops,
  onChange,
}) {
  // callback for clicking the "Add" button in the Next Stop tab
  const addToTrip = (e, id) => {
    console.log("Adding card #" + id + " to trip");
    e.stopPropagation(); // prevent selectResult() from calling
    setStops(stops.concat(results.filter((result) => result.id == id)));
  };

  return (
    <TabsUnstyled className="container" defaultValue={0} onChange={onChange}>
      <div className="flex-horizontal">
        <p id="view-label">View</p>
        <TabsList>
          <Tab>Next Stop</Tab>
          <Tab>Current Trip</Tab>
        </TabsList>
      </div>
      <TabPanel className="cards-container" value={0}>
        <Cards
          data={results}
          onSelect={selectResult}
          onBtnClick={addToTrip}
        />
      </TabPanel>
      <TabPanel className="cards-container" value={1}>
            <Cards data={stops} onSelect={selectStop} />
      </TabPanel>
    </TabsUnstyled>
  );
}

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const Tab = muiStyled(TabUnstyled)`
  box-sizing: border-box;
  color: var(--darkgrey);
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #e8e8e8;
  }

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: var(--red);
    color: #fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = muiStyled(TabPanelUnstyled)`
  width: 100%;
  box-sizing: border-box;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 14px;
`;

const TabsList = muiStyled(TabsListUnstyled)(
  ({ theme }) => `
  background-color: var(--grey);
  border-radius: 4px;
  width: 43%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 8px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  `
);
