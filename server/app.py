from flask import Flask, jsonify, request
from os import path
import json
from http import HTTPStatus

from services.routing_service import RoutingService
from util.create_response import send_as_json

app = Flask(__name__)

@app.route('/api/graph', methods=['GET'])
def get_graph():
    '''
    Get all of the location nodes in the system
    '''
    try:
        rs = RoutingService()
        graph_data = rs.get_graph_data()
        locations_data = rs.get_location_data()
    except Exception as err:
        return send_as_json(
            {"message": f"Error opening graph files, {err}"},
            HTTPStatus.INTERNAL_SERVER_ERROR.value
        )

    return send_as_json(
        {"graphData": graph_data, "locationsData": locations_data},
        HTTPStatus.OK.value
    )

@app.route('/api/locations', methods=['GET'])
def get_locations():
    '''
    Get all of the destinations nodes in the system
    '''
    try:
        rs = RoutingService()
        destinations = rs.get_filtered_destinations_list()
    except Exception as err:
        return send_as_json(
            {"message": f"Error opening graph files, {err}"},
            HTTPStatus.INTERNAL_SERVER_ERROR.value
        )

    return send_as_json(
        {"nodes": destinations},
        HTTPStatus.OK.value
    )

@app.route('/api/route')
def get_route():
    
    start = request.args.get('start')
    dest = request.args.get('end')
    print(request.args.get('options'))
    if request.args.get('options') == None:
        elevator = False
    else:
        options = json.loads(request.args.get('options'))
        elevator = True if "elevator" in options and options['elevator'] == 'True' else False
    # confirm what options are

    try: 
        rs = RoutingService()
        route = rs.compute_route(start, dest, elevator)
    except Exception as err:
        return send_as_json(
            {"message": f"Error computing route, {err}"},
            HTTPStatus.INTERNAL_SERVER_ERROR.value
        )

    return send_as_json(
        {'nodes': route, 'arrivalTime' : "NULLTIME"},
        HTTPStatus.OK.value
    )

if __name__ == '__main__':
    app.run()
