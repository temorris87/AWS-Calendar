from __future__ import print_function
import datetime
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/calendar']


def login():
    """Shows basic usage of the Google Calendar API.
        Prints the start and name of the next 10 events on the user's calendar.
        """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    return build('calendar', 'v3', credentials=creds)


def get_events(num_events):
    service = login()
    # Call the Calendar API
    now = datetime.datetime.utcnow().isoformat() + 'Z' # 'Z' indicates UTC time
    print(f'Getting the upcoming {num_events} events')
    events_result = service.events().list(calendarId='primary',
                                          timeMin=now,
                                          maxResults=num_events,
                                          singleEvents=True,
                                          orderBy='startTime').execute()
    print('Events obtained from Google, returning.')
    return events_result.get('items', [])


def get_daily_events(date_str):
    service = login()
    # Call the Calendar API
    now = datetime.datetime.utcnow().isoformat() + 'Z' # 'Z' indicates UTC time
    print(f"Getting today's events")

    time_min = day_start(date_str).isoformat() + 'Z'
    time_max = day_end(date_str).isoformat() + 'Z'
    events_result = service.events().list(calendarId='primary',
                                          timeMin=time_min,
                                          timeMax=time_max,
                                          singleEvents=True,
                                          orderBy='startTime').execute()
    print('Events obtained from Google, returning.')
    return events_result.get('items', [])

def build_date_time(date, time):
    return f'{date}T{time}'


def set_events(date, start_time, end_time, time_zone, title, location, description):
    service = login()
    event = {
        'summary': f'{title}',
        'location': f'{location}',
        'description': f'{description}',
        'start': {
            'dateTime': build_date_time(date, start_time),
            'timeZone': f'{time_zone}',
        },
        'end': {
            'dateTime': build_date_time(date, end_time),
            'timeZone': f'{time_zone}',
        },
        'recurrence': [
            # 'RRULE:FREQ=DAILY;COUNT=2'
        ],
        'attendees': [
            # {'email': 'lpage@example.com'},
            # {'email': 'sbrin@example.com'},
        ],
        'reminders': {
            # 'useDefault': False,
            # 'overrides': [
            #     {'method': 'email', 'minutes': 24 * 60},
            #     {'method': 'popup', 'minutes': 10},
            # ],
        },
    }

    print('Sending event to Google.')
    event = service.events().insert(calendarId='primary', body=event).execute()
    print('Event created: %s' % (event.get('htmlLink')))


def del_event(id):
    service = login()
    print('Deleting event with ID ' + id + '.')
    try:
        service.events().delete(calendarId='primary', eventId=id).execute()
        return True
    except:
        return False


def create_date(date_str, time_str):
    date_data = date_str.split('-')
    time_data = time_str.split(':')
    year = int(date_data[0])
    month = int(date_data[1])
    day = int(date_data[2])
    hour = int(time_data[0])
    minute = int(time_data[1])
    second = int(time_data[2])
    return datetime.datetime(year, month, day, hour=hour, minute=minute, second=second)


def day_start(date_str):
    return create_date(date_str, "0:00:00")


def day_end(date_str):
    return create_date(date_str, "23:59:59")


def main():
    set_events("2019-09-01", "13:00:00", "14:00:00", "America/New_York", "This is a test calendar event.", "New York City", "Sample Title")


if __name__ == '__main__':
    #main()
    print(get_daily_events("2019-10-15"))