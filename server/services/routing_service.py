from graph_data.dao import RoutingDao
from routing import get_route_nodes

class RoutingService:
    def __init__(self):
        pass

    def get_graph_data(self):
        dao = RoutingDao()
        return dao.get_graph_map() 

    def get_location_data(self):
        dao = RoutingDao()
        return dao.get_locations_map()

    def compute_route(self, start, dest, elevator):
        # location_data = self.get_location_data()
        # startID = str(location_data[start])
        # destID = str(location_data[dest])
        print(start)
        print(dest)
        route = get_route_nodes(start, dest, elevator)
        return route
    
    def get_destinations_as_list(self):
        dao = RoutingDao()
        locations = dao.get_locations_map()
        destinations = []
        for location in locations:
            destinations.append({
                "name": location,
                "id": str(locations[location])
            })
        return destinations
    
    def get_filtered_destinations_list(self):
        return list(filter(lambda x: (x["id"] == "1" or x["id"] == "11"), self.get_destinations_as_list()))
