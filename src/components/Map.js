import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import '../css/map.css'

mapboxgl.accessToken = 'pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig';

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.map=null;
    this.state = {
      lng: -97.113020,
      lat: 32.633330,
      zoom: 4,
      geojson: props.geojson,
    };
    this.markers = [];
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const {lng, lat, zoom, geojson} = this.state;
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: zoom
    });
  }

  removeMarkers() {
    for (const marker of this.markers) {
      marker.remove();
    }
    this.markers = [];
  }

  addMarkers(geojson) {
    if (this.map==null || geojson==null) return;
    console.log("Cleared markers");
    this.removeMarkers();

    for (const feature of geojson.features) {      
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      this.markers.push(new mapboxgl.Marker({color: 'var(--red)'})
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
        `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        )
        .addTo(this.map));
    }
    console.log("Added markers");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.geojson) !== JSON.stringify(prevState.geojson)) {
      console.log("Updating map.state['geojson']");
      return ({geojson: nextProps.geojson}) // <- this is setState equivalent
    }
    return null
  }

  render() {
    console.log("Rendering Map");
    const {lng, lat, zoom, geojson} = this.state;
    this.addMarkers(this.state['geojson']);

    return (
      <React.Fragment>
        <div ref={this.mapContainer} className="map-container" />
      </React.Fragment>
    );
  }
}
