from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def search(request):
  loc = request.GET.get('loc', "0,0")
  lon, lat = map(str.strip, loc.split(','))
  lon, lat = float(lon), float(lat)
  
  # if not ((-90 <= lat <= 90) and (-180 <= lon <= 180)):
  #   data = {"Error": "Invalid coordinates"}
  # else:
  #   data = {"Lat": lat, "Lon": lon}

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
          "coordinates": [-77.038659, 38.931567]
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
          "coordinates": [-77.003168, 38.894651]
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
          "coordinates": [-77.090372, 38.881189]
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
          "coordinates": [-77.111561, 38.882342]
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
          "coordinates": [-77.052477, 38.943951]
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
          "coordinates": [-77.043444, 38.909664]
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
          "coordinates": [-77.031706, 38.914581]
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
          "coordinates": [-77.020945, 38.878241]
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
          "coordinates": [-77.007481, 38.876516]
        }
      }
    ]
  }

  date = request.GET.get('date')
  return Response(data)

  
  