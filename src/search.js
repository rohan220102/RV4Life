import getResults from "./getResults";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig";

// this function should fetch and maybe process the results
export default function search(input, setResults) {
  console.log(input);

  const results = getResults(input);
  setResults(results);
}
