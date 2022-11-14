import json
import os
from collections import deque

cur_path = os.path.dirname(__file__)
graph_file_path = os.path.join(cur_path, "graph_data", "graph.json")
graph = {}
directions = {
    "R": "right_adj_list",
    "L": "left_adj_list",
    "F": "fwd_adj_list"
}
direction_instructions = {
    "R": "Turn right",
    "L": "Turn left",
    "F": "Continue going straight"
}
direction_icons = {
    "R": 2,
    "L": 1,
    "F": 0
}
use_elevator = False


with open(graph_file_path) as graph_file:
    graph = json.load(graph_file)

def create_path(seen, end, start):
    curr = end
    path = []
    while curr != start:
        path.append(curr)
        path.append(seen[curr][1])
        curr = seen[curr][0]
    
    path.append(start)
    
    return path[::-1]
    

def route_to_dest(start, end):
    seen = {}
    queue = deque()
    queue.append(start)
    while queue:
        cur = queue.popleft()
        for d in directions:
            for neighbour in graph[cur][directions[d]]:
                neighbour = str(neighbour)
                if neighbour == end:
                    seen[neighbour] = (cur, d)
                    return create_path(seen, end, start)
                elif use_elevator == graph[neighbour]["elevator"]:
                    seen[neighbour] = (cur, d)
                    queue.append(neighbour)
    
def get_route_nodes(start, end, use_elevator):
    use_elevator = use_elevator
    route = route_to_dest(start, end)
    nodes = []
    for i in range(0, len(route), 2):
        curr_node = {}
        curr_node["id"] = route[i]
        curr_node["name"] = graph[route[i]]["name"]
        if i < len(route) -1:
            curr_node["instruction"] = { 
                "title": direction_instructions[route[i+1]],
                "description": graph[route[i]]["name"],
                "icon": direction_icons[route[i+1]]
            }
            curr_node["overlayItems"] = {
                "x":0,
                "y":20,
                "type": direction_icons[route[i+1]]
            }
        else:
            curr_node["instruction"] = { 
                "title": graph[route[i]]["name"],
                "description": "YOU HAVE ARRIVED",
                "icon": 3
            }
        curr_node["imageURL"] = graph[route[i]]["image"]
        nodes.append(curr_node)
    return nodes
