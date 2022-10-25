from graph_data.dao import RoutingDao

class RoutingService:
    def __init__(self):
        pass

    def get_graph_data(self):
        dao = RoutingDao()
        return dao.get_graph_map() 

    def get_location_data(self):
        dao = RoutingDao()
        return dao.get_locations_map()

    def compute_route(self, start, dest):
        location_data = self.get_location_data()
        startID = location_data[start]
        destID = location_data[dest]
        return []
