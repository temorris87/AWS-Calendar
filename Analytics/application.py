from flask import Flask
from flask import request
from flask import jsonify
import feign_calendar
application = Flask(__name__)


@application.route('/', methods=['GET'])
def get_events():
    num_events = request.args.get('num_events')
    events = feign_calendar.get_events(num_events)
    return jsonify(events)


@application.route('/day/<day_str>', methods=['GET'])
def get_daily_events(day_str):
    print("Made it, code works")
    events = feign_calendar.get_daily_events(day_str)
    return jsonify(events)


@application.route('/create', methods=['POST'])
def create_event():
    date = request.args.get('date')
    start_time = request.args.get('start_time')
    end_time = request.args.get('end_time')
    time_zone = request.args.get('time_zone')
    title = request.args.get('title')
    location = request.args.get('location')
    description = request.args.get('description')
    res = feign_calendar.set_events(date, start_time, end_time, time_zone, title, location, description)
    return "success"


@application.route('/update/<eid>', methods=['PUT'])
def update_event(eid):
    date = request.args.get('date')
    start_time = request.args.get('start_time')
    end_time = request.args.get('end_time')
    time_zone = request.args.get('time_zone')
    title = request.args.get('title')
    location = request.args.get('location')
    description = request.args.get('description')
    res = feign_calendar.update_events(eid, date, start_time, end_time, time_zone, title, location, description)
    return "success"


@application.route('/delete/<eid>', methods=['DELETE'])
def delete_event(eid):
    if feign_calendar.del_event(eid):
        return "Success"
    else:
        return "Incorrect ID"


if __name__ == '__main__':
    application.run(port=5000)
    #application.run(host="0.0.0.0", port=5000)
