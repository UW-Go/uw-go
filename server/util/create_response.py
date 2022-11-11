from flask import jsonify
from http import HTTPStatus

# def send_as_json(response_body, status_code):
def send_as_json(response_body: dict, status_code: int):
    response = jsonify(response_body)
    response.status_code = status_code
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
