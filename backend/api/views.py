from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def search(request):
  loc = request.GET.get('loc', "0,0")
  lon, lat = map(str.strip, loc.split(','))
  lon, lat = float(lon), float(lat)
  
  if not ((-90 <= lat <= 90) and (-180 <= lon <= 180)):
    data = {
      "type": "FeatureCollection",
      "features": []}
  else:
    data = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "id": 0,
            "title": "Boston RV Camp",
            "description": "San Francisco, California",
            "selected": False,
            "rating": "5.0",
            "detour": "6 min.",
            "visited": "251",
            "temp": 64
          },
          "geometry": {
            "type": "Point",
            "coordinates": [lon + 0.01, lat + 0.01]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "id": 1,
            "title": "Bear Woods Campgrounds",
            "description": "San Francisco, California",
            "selected": False,
            "rating": "4.9",
            "detour": "6 min.",
            "visited": "251",
            "temp": 64
          },
          "geometry": {
            "type": "Point",
            "coordinates": [lon - 0.01, lat - 0.01]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "id": 2,
            "title": "Treetops RV Resort",
            "description": "Washington, D.C.",
            "selected": False,
            "rating": "4.9",
            "detour": "6 min.",
            "visited": "251",
            "temp": 64
          },
          "geometry": {
            "type": "Point",
            "coordinates": [lon + 0.017, lat + 0.034]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "id": 3,
            "title": "Lakeridge Campgrounds and RV Park",
            "description": "Washington, D.C.",
            "selected": False,
            "rating": "4.9",
            "detour": "6 min.",
            "visited": "251",
            "temp": 64
          },
          "geometry": {
            "type": "Point",
            "coordinates": [lon - 0.007, lat + 0.031]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "id": 4,
            "title": "Loyd Park",
            "description": "Washington, D.C.",
            "selected": False,
            "rating": "4.9",
            "detour": "6 min.",
            "visited": "251",
            "temp": 64
          },
          "geometry": {
            "type": "Point",
            "coordinates": [lon + 0.0812, lat - 0.0083]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "id": 5,
            "title": "Normandy Farms Campground",
            "description": "Washington, D.C.",
            "selected": False,
            "rating": "4.9",
            "detour": "6 min.",
            "visited": "251",
            "temp": 64
          },
          "geometry": {
            "type": "Point",
            "coordinates": [lon + 0.024, lat + 0.0124]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "id": 6,
            "title": "Lakeridge Campgrounds and RV Park",
            "description": "Washington, D.C.",
            "selected": False,
            "rating": "4.9",
            "detour": "6 min.",
            "visited": "251",
            "temp": 64
          },
          "geometry": {
            "type": "Point",
            "coordinates": [lon + 0.012, lat - 0.014]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "id": 7,
            "title": "Boston Trailer Park",
            "description": "Washington, D.C.",
            "selected": False,
            "rating": "4.9",
            "detour": "6 min.",
            "visited": "251",
            "temp": 64
          },
          "geometry": {
            "type": "Point",
            "coordinates": [lon - 0.0212, lat + 0.008523]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "id": 8,
            "title": "Hanscom AFB FamCamp",
            "description": "Washington, D.C.",
            "selected": False,
            "rating": "4.9",
            "detour": "6 min.",
            "visited": "251",
            "temp": 64
          },
          "geometry": {
            "type": "Point",
            "coordinates": [lon + 0.03, lat - 0.03]
          }
        }
      ]
    }

  date = request.GET.get('date')
  return Response(data)

  
  