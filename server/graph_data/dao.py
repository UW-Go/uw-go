import json
from os import path

# Data Access Object
class RoutingDao:

    def __init__(self):
        pass

    def get_graph_map(self):
        graph_file_path = path.join(
            path.dirname(__file__), 'graph.json'
        )

        with open(graph_file_path) as graph_file:
            return json.load(graph_file)

    def get_locations_map(self):
        locations_file_path = path.join(
            path.dirname(__file__), 'locations.json'
        )

        with open(locations_file_path) as locations_file:
            return json.load(locations_file)
