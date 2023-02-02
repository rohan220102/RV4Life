import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import Results from "./Results";
import "../css/tabs.css";

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

const Tab = styled(TabUnstyled)`
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

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  box-sizing: border-box;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 14px;
`;

const TabsList = styled(TabsListUnstyled)(
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
        <div tabIndex={-1}>
          {results.length === 0 ? (
            <h5
              style={{
                textAlign: "center",
                margin: 0,
                marginTop: "0.5em",
                color: "black",
                padding: "0 1em",
              }}
            >
              Enter a start location to receive suggestions.
            </h5>
          ) : (
            <Results
              results={results}
              onSelect={selectResult}
              addToTrip={addToTrip}
            />
          )}
        </div>
      </TabPanel>
      <TabPanel value={1}>
        <div className="cards-container" tabIndex={-1}>
          {stops.length === 0 ? (
            <h5
              style={{
                textAlign: "center",
                margin: 0,
                marginTop: "0.5em",
                color: "black",
                padding: "0 1em",
              }}
            >
              There are no stops in your current trip. You can add one from the
              "Next Stop" tab.
            </h5>
          ) : (
            <Results results={stops} onSelect={selectStop}></Results>
          )}
        </div>
      </TabPanel>
    </TabsUnstyled>
  );
}
