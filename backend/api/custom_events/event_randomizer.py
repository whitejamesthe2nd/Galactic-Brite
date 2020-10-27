from random import randint
import requests
from backend.api.custom_events.description import random_description
from backend.api.custom_events.date import random_date
from backend.api.custom_events.name import random_name
from backend.models import Picture

def get_random_event():
    print(Picture.query.get(randint(1,37)).url)
    return {
    "name": random_name(),
    "event_description": random_description(),
    "host_id": randint(1,9),
    "event_date": random_date(),
    "event_planet": requests.get(f"http://swapi.dev/api/planets/{randint(1,60)}/").json()['name'],
    "event_picture_url": Picture.query.get(randint(1,37)).url,
    "is_featured": False
}
