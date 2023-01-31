import React, { useRef, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./css/map.css";
import colors from "./colors.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig";

export default function App() {
  const [results, setResults] = useState([]);
  const [stops, setStops] = useState([]);
  const [view, setView] = useState(0);

  console.log("Rendering application");

  const selectResult = (id) => {
    console.log("Selected");
    setResults(
      results.map((result) =>
        result.id == id
          ? { ...result, selected: true }
          : { ...result, selected: false }
      )
    );
  };

  const selectStop = (id) => {
    console.log("Selected");
    setStops(
      stops.map((stop) =>
        stop.id == id
          ? { ...stop, selected: true }
          : { ...stop, selected: false }
      )
    );
  };

  const addToTrip = (e, id) => {
    console.log("Adding card #" + id + " to trip");
    e.stopPropagation(); // prevent selectResult() from calling
    setStops(stops.concat(results.filter((result) => result.id == id)));
  };

  /*********************** MapBox ***********************/
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-110.11302);
  const [lat, setLat] = useState(40.63333);
  const [zoom, setZoom] = useState(3);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    console.log("Creating map");
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      projection: {
        name: "mercator",
        parallels: [55, 65],
      },
      maxZoom: 13,
      style: "mapbox://styles/quynh16/cldjj7h73001m01rnw8y30hhm",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(
    () => {
      console.log("Updating markers");
      view == 0 ? addMarkers(results) : addMarkers(stops);
    },
    view == 0 ? [results] : [stops]
  );

  const addMarkers = (results) => {
    for (const marker of markers) marker.remove();
    const newMarkers = [];

    for (const res of results) {
      // create new marker and add to map
      newMarkers.push(
        new mapboxgl.Marker({
          color: res.selected ? colors.primary : colors.secondary,
        })
          .setLngLat(res.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(`<h3>${res.title}</h3><p>${res.description}</p>`)
          )
          .addTo(map.current)
      );

      // create HTML id for each marker
      const newId = "marker" + res.id;
      newMarkers[newMarkers.length - 1].getElement().id = newId;

      // add click event to highlight corresponding Card element
      document.getElementById(newId).addEventListener("click", (e) => {
        const id = e.currentTarget.id.substring(6);
        view == 0 ? selectResult(id) : selectStop(id);
      });
    }
    setMarkers(newMarkers); // update markers state
  };

  /*******************************************************/

  return (
    <div className="App" id={"app-container"}>
      <Sidebar
        pageWrapId={"page-wrap"}
        outerContainerId={"app-container"}
        results={results}
        setResults={setResults}
        stops={stops}
        setStops={setStops}
        selectResult={selectResult}
        selectStop={selectStop}
        onAdd={addToTrip}
        setView={setView}
      />
      {/* <Map data={results} setData={setResults}/> */}
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
