from flask import Flask, jsonify, request
from os import path
import json
from http import HTTPStatus

from services.routing_service import RoutingService

app = Flask(__name__)

@app.route('/')
def sample_endpoint():
    return 'Hello World!'

@app.route('/api/locations', methods=['GET'])
def get_locations():
    '''
    Get all of the location nodes in the system
    '''

    try:
        rs = RoutingService()
        graph_data = rs.get_graph_data()
        locations_data = rs.get_location_data()
    except Exception as err:
        return jsonify(
            {"message": f"Error opening graph files, {err}"}
        ), HTTPStatus.BAD_REQUEST.value

    response = jsonify(
        {"graphData": graph_data, "locationsData": locations_data}
    )
    response.status_code = HTTPStatus.OK.value
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/api/route')
def get_route():
    start = request.args.get('start')
    dest = request.args.get('dest')
    elevator = request.args.get('elevator', False)

    try: 
        rs = RoutingService()
        route = rs.compute_route(start, dest, elevator)
    except Exception as err:
        return jsonify(
            {"message": f"Error computing route, {err}"}
        ), HTTPStatus.BAD_REQUEST.value

    return jsonify(
        {'nodes': route, 'arrivalTime' : "NULLTIME"}
    ), HTTPStatus.OK.value

if __name__ == '__main__':
    app.run()
