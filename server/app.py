from flask import Flask, jsonify
from os import path
import json
from http import HTTPStatus

app = Flask(__name__)


@app.route('/')
def sample_endpoint():
    return 'Hello World!'

@app.route('/api/locations', methods=['GET'])
def get_locations():
    '''
    Get all of the location nodes in the system
    '''
    graph_file_path = path.join(
        path.dirname(__file__), 'graph_data', 'graph.json'
    )
    graph_data = {}
    locations_file_path = path.join(
        path.dirname(__file__), 'graph_data', 'locations.json'
    )
    locations_data = {}

    try:
        with open(graph_file_path) as graph:
            graph_data = json.load(graph)
        with open(locations_file_path) as locations:
            locations_data = json.load(locations)
    except Exception as err:
        return jsonify(
            {"message": "Error opening graph files"}
        ), HTTPStatus.BAD_REQUEST.value

    return jsonify(
        {"graphData": graph_data, "locationsData": locations_data}
    ), HTTPStatus.OK.value


if __name__ == '__main__':
    app.run()
