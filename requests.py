import googlemaps
import requests
import json
from time import sleep

def reverse_geocode(lat, lng):
    gmaps = googlemaps.Client(key='AIzaSyCYMSsyxJuAlv22vTsznmjnu4PgqKiNX2c')
    result = gmaps.reverse_geocode((lat, lng))
    return result[0]['formatted_address']

def getName():
    print("Please enter the Latitude: ")
    lat = input()
    print("Please enter the Longitude: ")
    lng = input()

    # Retry up to 5 times before giving an error
    retries = 0
    while retries < 5:
        try:
            location = reverse_geocode(lat, lng)
            if location:
                print("The location is: {}".format(location))
            else:
                print("Unable to determine location.")
            break
        except:
            retries += 1
            sleep(1)
            continue
    else:
        print("Failed to determine location after 5 retries.")
    

getName()