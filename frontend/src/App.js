// libraries
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

// components
import SideBar from "./components/SideBar";

// styles
import colors from "./colors.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig";

export default function App() {
  // state data for cards and markers
  const [results, setResults] = useState([]);
  const [stops, setStops] = useState([]);
  const [view, setView] = useState(0); //

  console.log("Rendering application");

  // set a Data object as selected when a card/marker is clicked
  const selectResult = (id) => {
    console.log("Selected result #" + id);
    setResults(
      results.map((result) =>
        result.id === parseInt(id)
          ? { ...result, selected: true }
          : { ...result, selected: false }
      )
    );
  };

  // set a Data object as selected when a card/marker is clicked
  const selectStop = (id) => {
    console.log("Selected stop #" + id);
    setStops(
      stops.map((stop) =>
        stop.id === parseInt(id)
          ? { ...stop, selected: true }
          : { ...stop, selected: false }
      )
    );
  };

  /*********************** MapBox ***********************/

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-110.11302);
  const [lat, setLat] = useState(40.63333);
  const [zoom, setZoom] = useState(3);

  // reference to the actual markers on the map
  const [markers, setMarkers] = useState([]);

  // initiate map upon first launch
  useEffect(() => {
    if (map.current) return; // initialize map only once
    console.log("Initializing map");
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

  // update map when user pans around
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // update markers depending on which tab view you're in
  useEffect(
    () => {
      console.log("Updating markers");
      view === 0 ? addMarkers(results) : addMarkers(stops);
    },
    view === 0 ? [results] : [stops]
  );

  // takes in an array of Data and plots them as markers on the map
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
        view === 0 ? selectResult(id) : selectStop(id);
      });
    }
    setMarkers(newMarkers); // update markers state
  };

  /********************** Render ***********************/

  return (
    <div className="App" id={"app-container"}>
      <SideBar
        pageWrapId={"page-wrap"}
        outerContainerId={"app-container"}
        results={results}
        setResults={setResults}
        selectResult={selectResult}
        stops={stops}
        setStops={setStops}
        selectStop={selectStop}
        view={view}
        setView={setView}
      />
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
