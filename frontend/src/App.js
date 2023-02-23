// libraries
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

// components
import SideBar from "./components/SideBar";

// styles
import colors from "./colors.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig";

export const StartContext = React.createContext();

export default function App() {
  // state data for cards and markers
  const [results, setResults] = useState({
    type: "FeatureCollection",
    features: [],
  });
  const [stops, setStops] = useState({
    type: "FeatureCollection",
    features: [],
  });
  const [view, setView] = useState(0); //
  const [selected, setSelected] = useState();
  const [start, setStart] = useState(null);

  // console.log("Rendering application");

  // set a Data object as selected when a card/marker is clicked
  const selectResult = (id) => {
    console.log("Selected result #" + id);
    setResults({
      ...results,
      features: results.features.map((feat) =>
        feat.properties.id === parseInt(id)
          ? { ...feat, properties: { ...feat.properties, selected: true } }
          : { ...feat, properties: { ...feat.properties, selected: false } }
      ),
    });
    setSelected(id);
  };

  // set a Data object as selected when a card/marker is clicked
  const selectStop = (id) => {
    console.log("Selected stop #" + id);
    setStops({
      ...stops,
      features: stops.features.map((feat) =>
        feat.properties.id === parseInt(id)
          ? { ...feat, properties: { ...feat.properties, selected: true } }
          : { ...feat, properties: { ...feat.properties, selected: false } }
      ),
    });
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
    // console.log("Initializing map");
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      projection: {
        name: "mercator",
        parallels: [55, 65],
      },
      minZoom: 2,
      style: "mapbox://styles/quynh16/cldjj7h73001m01rnw8y30hhm",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new mapboxgl.NavigationControl());


    map.current.on("load", () => {
      map.current.addSource("places", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/quynh16/quynh16.github.io/main/results.json",
      });
    });
  });

  // scroll card into center when selected
  useEffect(() => {
    if (selected) {
      const card_id = "card" + selected;
      document.getElementById(card_id).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [selected]);

  // centers the map on the currentFeature
  useEffect(() => {
    if (!start) return;
    map.current.flyTo({
      center: start,
      zoom: 12,
    });
  }, [start]);

  // update map when user pans around
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    setResults({
      ...results,
      features: results.features.map((feat) => ({
        ...feat,
        properties: { ...feat.properties, selected: false },
      })),
    });
    setStops({
      ...stops,
      features: stops.features.map((feat) => ({
        ...feat,
        properties: { ...feat.properties, selected: false },
      })),
    });
  }, [view]);

  // update markers depending on which tab view you're in
  useEffect(
    () => {
      // console.log("Updating markers");
      view === 0 ? addMarkers(results) : addMarkers(stops);
    },
    view === 0 ? [results] : [stops]
  );

  // takes in an array of Data and plots them as markers on the map
  const addMarkers = (feat_collection) => {
    const features = feat_collection.features;
    for (const marker of markers) marker.remove();
    const newMarkers = [];

    for (const feature of features) {
      // create new marker and add to map
      newMarkers.push(
        new mapboxgl.Marker({
          color: feature.properties.selected
            ? colors.primary
            : colors.secondary,
        })
          .setLngLat(feature.geometry.coordinates)
          .setPopup(
            new mapboxgl.Popup({
              offset: 25,
              closeOnClick: false,
              closeButton: false,
            }) // add popups
              .setHTML(
                `<h3 style="margin: 0;">${feature.properties.title}</h3>`
              )
          )
          .addTo(map.current)
      );

      // create HTML id for each marker
      const newId = "marker" + feature.properties.id;
      newMarkers[newMarkers.length - 1].getElement().id = newId;
      if (feature.properties.selected)
        newMarkers[newMarkers.length - 1].togglePopup();
      // add click event to highlight corresponding Card element
      document.getElementById(newId).addEventListener("click", (e) => {
        const id = feature.properties.id;
        view === 0 ? selectResult(id) : selectStop(id);
      });
    }
    setMarkers(newMarkers); // update markers state
  };

  /********************** Render ***********************/

  return (
    <div className="App" id={"app-container"}>
      <StartContext.Provider value={{ start: start, setStart: setStart }}>
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
      </StartContext.Provider>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
