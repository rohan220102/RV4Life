const getResults = ({input}) => {
  return (
    [
      {
        title: 'Mapbox',
        coordinates: [-77.032, 38.913],
        description: 'Washington, D.C.',
        selected: false,
        rating: '4.8',
        detour: '6 min.',
        visited: '251',
        temp: 64
      },
      {
        title: 'Mapbox',
        coordinates: [-122.414, 37.776],
        description: 'San Francisco, California',
        selected: true,
        rating: '4.8',
        detour: '6 min.',
        visited: '251',
        temp: 64
      },
      {
        title: 'Mapbox',
        coordinates: [-97.113020, 32.733330],
        description: 'San Francisco, California',
        selected: false,
        rating: '4.8',
        detour: '6 min.',
        visited: '251',
        temp: 64
      }
    ]
  )
}

export default getResults;