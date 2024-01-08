const express = require('express')
const generateIcs = require('ics-service/generate-ics')
const aboutRoute = require('ics-service/about')
const feedRoute = require('ics-service/feed')
const clubsData = require('./data/clubs.json')



const app = express()
const port = 3003

clubsData.forEach(club => {
  const getIcs = feedUrl => generateIcs(`${club.club} Schedule`, events, feedUrl)
  console.log(getIcs);
  app.use(`/${club.abbreviation}`, feedRoute(getIcs))
  app.use('/', aboutRoute(`${club.club} Schedule`))
});

// Express code to create an endpoint for each abbreviation in clubsData




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const events = [{
  uid: 'a', title: 'A', description: 'A.',
  location: 'Alamo Square, San Francisco, CA',
  url: 'https://example.org/',
  geo: { lat: 37.774703, lon: -122.432642, radius: 20 },
  categories: ['event'],
  start: [2024, 1, 8, 8, 8],
  duration: { hours: 1, minutes: 30 }
}, {
  uid: 'b',
  title: 'B', description: 'B.',
  start: [2024, 1, 9, 9, 9],
  duration: { hours: 0, minutes: 45 }
}]

// fetch('https://sportapi.mlssoccer.com/api/matches?culture=en-us&dateFrom=2024-01-01&dateTo=2024-12-31&excludeSecondaryTeams=true')
//   .then((response) => response.text())
//   .then((body) => {
//     const matches = JSON.parse(body);
//     const formattedMatches = [];
//     matches.forEach(match => {
//       if (match.home.abbreviation === 'NE' || match.away.abbreviation === 'NE') {
//         const matchData = new Object;
//         const matchDate = new Date(match.matchDate);

//         matchData.title = match.home.shortName + ' v ' + match.away.shortName;
//         matchData.location = match.venue.name + ', ' + match.venue.city;
//         matchData.description = match.competition.name + '\nWatch on: ' + (match.broadcasters && match.broadcasters.length > 0 ? match.broadcasters[0].broadcasterName : null);
//         matchData.start = [matchDate.getFullYear(), matchDate.getMonth() + 1, matchDate.getDate(), matchDate.getHours(), matchDate.getMinutes()];
//         matchData.startInputType = 'local';
//         matchData.duration = { hours: 2, minutes: 15 };
//         formattedMatches.push(matchData);

//         if (parseInt(match.matchDay) >= 37) {
//           const { error, value } = ics.createEvents(formattedMatches);

//           if (error) {
//             console.log(error)
//             return
//           }

//           fs.writeFile('public/' + 'test' + '.ics', value, (err) => {
//             if (err) throw err;
//             console.log('.ics calendar file saved');
//           });
//         }
//       }
//     });
//   });

