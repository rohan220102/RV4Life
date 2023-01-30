export default function getResults() {
  console.log("Getting predictions and generating output geo data...");
  return (
    {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-77.032, 38.913]
          },
          properties: {
            title: 'Mapbox',
            description: 'Washington, D.C.'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.414, 37.776]
          },
          properties: {
            title: 'Mapbox',
            description: 'San Francisco, California'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-97.113020, 32.733330]
          },
          properties: {
            title: 'Mapbox',
            description: 'San Francisco, California'
          }
        }
      ]
    }
  )
}