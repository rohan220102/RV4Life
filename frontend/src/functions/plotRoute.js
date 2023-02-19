import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig";

const plotRoute = (start, end) => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: start,
    zoom: 10,
  });

  // Mark starting and ending coordinates
  new mapboxgl.Marker().setLngLat(start).addTo(map);
  new mapboxgl.Marker().setLngLat(end).addTo(map);

  // directions from the Mapbox Directions API
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const route = data.routes[0].geometry.coordinates;
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };

      // Layer
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#ff0000",
          "line-width": 5,
          "line-opacity": 0.7,
        },
      });

      // zoom into the route
      const bounds = new mapboxgl.LngLatBounds();
      route.forEach((point) => bounds.extend(point));
      map.fitBounds(bounds, { padding: 50 });
    });
};

export default plotRoute;
