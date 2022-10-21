class Locations:
    '''
    A data structure to hold collections of LocationNodes
    ...
    Attributes
    -----------
    id_nodes_map : dict<int, LocationNode>
        maps integer location IDs to their respective LocationNodes

    name_id_map : dict<string, int>
        maps names of locations to integer location IDs

    Methods
    -------
    '''

    def __init__(self):
        self.id_nodes_map = {}
        self.name_id_map = {}

    def get_location_node(self, location_id):
        return self.id_nodes_map.get(location_id, None)

    def set_location_node(self, location_id, location_node):
        self.id_nodes_map[location_id] = location_node
        return location_node

    def get_location_id(self, location_name):
        return self.name_id_map.get(location_name, None)

    def add_location(self, location_name):
        if location_name in self.name_id_map:
            # duplicate location
            raise Exception(f'{location_name} is already a location!')
        # map location name to ID -> ID is based off number of entries in name_id_map
        location_id = len(self.name_id_map.keys())
        self.name_id_map[location_name] = location_id
        return location_id


class LocationNode:
    '''
    A data structure to hold location data pertaining to key points on routes
    ...
    Attributes
    -----------
    direction: str
    title: str
    arrow: str

    Methods
    -------
    '''
    def __init__(self, direction, title, arrow):
        self.direction = direction
        self.title = title
        self.arrow = arrow
