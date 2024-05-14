let CLIENT_ID = '936647002030-icb47093r28bt62atoc7252slr54dmgr.apps.googleusercontent.com';
let API_KEY = 'AIzaSyAyYCmNBwQT-Ryfy8SwzPjcaS5IXgp2bLg';
let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
let SCOPES = "https://www.googleapis.com/auth/calendar.events";

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        gapi.auth2.getAuthInstance().signIn();
    });
}

function createEvent(event) {
    let request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
    });

    request.execute(function (event) {
        console.log('Event created: ' + event.htmlLink);
    });
}

function addEvents() {
    let rows = document.querySelectorAll('#t_body tr');
    rows.forEach(row => {
        let cells = row.getElementsByTagName('td');
        let jobName = cells[0].innerText;
        let dueDate = cells[4].innerText;

        let event = {
            'summary': jobName,
            'start': {
                'dateTime': new Date(dueDate).toISOString(),
                'timeZone': 'America/Los_Angeles'
            },
            'end': {
                'dateTime': new Date(new Date(dueDate).getTime() + (60 * 60 * 1000)).toISOString(),
                'timeZone': 'America/Los_Angeles'
            }
        };
        createEvent(event);
    });
}
