from googlemaps import Client
#import googlemaps
import json

def getRating(coord):
    gmaps = Client(key='AIzaSyCYMSsyxJuAlv22vTsznmjnu4PgqKiNX2c')
    places_result = gmaps.places_nearby(location=coord, radius=1000, type='point_of_interest')
    if len(places_result['results']) > 0:
        place_id = places_result['results'][0]['place_id']
        place_details = gmaps.place(place_id, fields=['name', 'rating'])
        if 'rating' in place_details['result']:
            return place_details['result']['rating']
    return 0
    
coord = [-97.11528982168929, 32.72258477036853]
rating = getRating(coord)
print(rating)