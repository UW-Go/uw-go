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

    def get_location_node(self, location_id: int):
        return self.id_nodes_map.get(location_id, None)

    def set_location_node(self, location_id: int, location_node: LocationNode):
        self.id_nodes_map[location_id] = location_node
        return location_node

    def get_location_id(self, location_name: str):
        return self.name_id_map.get(location_name, None)

    def add_location(self, location_name: str):
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
    id: int
    name: str
    instruction: Instruction
    imageURL: str
    overlayItems: {
        arrow: Arrow | None
    }

    Methods
    -------
    '''
    def __init__(self, id: int, name: str, instruction: Instruction, image_url: str, overlay_items: dict):
        self.id = id
        self.name = name
        self.instruction = instruction
        self.image_url = image_url
        self.overlay_items = overlay_items