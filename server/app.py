from flask import Flask
from locations import Locations

app = Flask(__name__)

# location information storage cache
locations = Locations()


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/home')
def home():
    return 'Home Page!'


@app.route('/api/locations')
def locations():
    return locations


@app.route('/api/route')
def route():
    return 'Route!'


if __name__ == '__main__':
    app.run()
