from flask import Flask
from flask import request
from flask import jsonify
from Analytics import feign_calendar
app = Flask(__name__)


@app.route('/')
def get_events():
    num_events = request.args.get('num_events')
    events = feign_calendar.get_events(num_events)
    return jsonify(events)


# @app.route('/create')
# def create_event():


if __name__ == '__main__':
    app.run()
