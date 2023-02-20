import getResults from "./getResults";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig";

// this function should fetch and maybe process the results
export default function search(input, setResults, startContext) {
  console.log("Searching...");
  const { start, setStart } = startContext;
  // setStart(input.input.geometry.coordinates);
  setStart([-77.068444, 38.909664]);
  // const results = getResults(input);
  // const results = JSON.parse(res);
  fetch(
    "https://raw.githubusercontent.com/quynh16/quynh16.github.io/main/results.json"
  )
    .then((response) => response.json())
    .then((json) => {
      setResults(json);
      console.log(json);
    });
  // setResults(results);
}
