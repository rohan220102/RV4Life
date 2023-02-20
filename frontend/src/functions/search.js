import getResults from "./getResults";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig";

// this function should fetch and maybe process the results
const search = (input, setResults, startContext) => {
  console.log("Searching for possible next stops...");
  const lon = input.input.geometry.coordinates[0];
  const lat = input.input.geometry.coordinates[1];
  const { start, setStart } = startContext;
  // setStart(input.input.geometry.coordinates);
  setStart([-77.068444, 38.909664]);
  // const results = getResults(input);
  // const results = JSON.parse(res);
  // const url = `http://127.0.0.1:8000/server/next_stops/${input}`;
  const url = `http://127.0.0.1:8000/api/search/?loc=${lon},${lat}`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      setResults(json);
      console.log("Fetched data from server:");
      console.log(json);
    });
  // setResults(results);
};

export default search;
