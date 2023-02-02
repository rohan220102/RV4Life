import getResults from "./getResults";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig";

export default function search(input, setResults) {
  // const results = document.getElementById("results");
  console.log(input);

  // console.log(str);
  // results.innerHTML = str;

  const results = getResults(input);
  setResults(results);
}
