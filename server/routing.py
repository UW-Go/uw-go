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
directionInstructions = {
    "R": "RIGHT",
    "L": "LEFT",
    "F": "STRAIGHT"
}
directionIcons = {
    "R": 2,
    "L": 1,
    "F": 0
}
use_elevator = False


with open(graph_file_path) as graph_file:
    graph = json.load(graph_file)

def createPath(seen, end, start):
    curr = end
    path = []
    while curr != start:
        path.append(curr)
        path.append(seen[curr][1])
        curr = seen[curr][0]
    
    path.append(start)
    
    return path[::-1]
    

def routeToDest(start, end):
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
                    return createPath(seen, end, start)
                elif use_elevator == graph[neighbour]["elevator"]:
                    seen[neighbour] = (cur, d)
                    queue.append(neighbour)
    
def getRouteNodes(start, end, use_elevator):
    use_elevator = use_elevator
    route = routeToDest(start, end)
    nodes = []
    for i in range(0, len(route), 2):
        currNode = {}
        currNode["id"] = route[i]
        currNode["name"] = graph[route[i]]["name"]
        if i < len(route) -1:
            currNode["instruction"] = { 
                "title": graph[route[i]]["name"],
                "description": "GO " + directionInstructions[route[i+1]],
                "icon": directionIcons[route[i+1]]
            }
            currNode["overlayItems"] = {
                "x":0,
                "y":20,
                "type": directionIcons[route[i+1]]
            }
        else:
            currNode["instruction"] = { 
                "title": graph[route[i]]["name"],
                "description": "YOU HAVE ARRIVED",
                "icon": 3
            }
        currNode["imageURL"] = graph[route[i]]["image"]
        nodes.append(currNode)
    return nodes