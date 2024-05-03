const fs = require('fs');
const ics = require('ics');
const fetch = require('node-fetch');
const clubsData = require('../data/clubs.json');
const getClubName = require('./getClubName');

function generateTeamCals() {
  fetch('https://sportapi.mlssoccer.com/api/matches?culture=en-us&dateFrom=2024-01-01&dateTo=2024-12-31&excludeSecondaryTeams=true')
    .then((response) => response.text())
    .then((body) => {
      const matches = JSON.parse(body);
      clubsData.forEach(club => {
        const formattedMatches = [];
        matches
          .filter(match => (match.home.abbreviation === club.abbreviation || match.away.abbreviation === club.abbreviation))
          .forEach(match => {
            const matchData = new Object;
            const matchDate = new Date(match.matchDate);

            matchData.calName = club.fullname;
            matchData.title = getClubName(match.home.fullName) + ' vs ' + getClubName(match.away.fullName);
            matchData.location = match.venue.name + ', ' + match.venue.city;
            matchData.description = '🏆 ' + match.competition.name + '\n📺 Watch: ' + (match.broadcasters && match.broadcasters.length > 0 ? match.broadcasters[0].broadcasterName : null);
            matchData.start = [matchDate.getFullYear(), matchDate.getMonth() + 1, matchDate.getDate(), matchDate.getHours(), matchDate.getMinutes()];
            matchData.startInputType = 'local';
            matchData.duration = { hours: 2, minutes: 15 };
            formattedMatches.push(matchData);

            if (parseInt(match.matchDay) >= 37) {
              const { error, value } = ics.createEvents(formattedMatches);

              if (error) {
                console.log(error)
                return
              }

              fs.writeFile('public/' + club.abbreviation + '.ics', value, (err) => {
                if (err) throw err;
                console.log(club.abbreviation + '.ics calendar file saved');
              });
            }
          }); // matches.forEach
      }); // clubsData.forEach
    }); // .then
  // fetch
} // generateTeamCals

function generateMLSCal() {
  fetch('https://sportapi.mlssoccer.com/api/matches?culture=en-us&dateFrom=2024-01-01&dateTo=2024-12-31&excludeSecondaryTeams=true')
    .then((response) => response.text())
    .then((body) => {
      const matches = JSON.parse(body);
      
        const formattedMatches = [];
        matches
          .forEach(match => {
            const matchData = new Object;
            const matchDate = new Date(match.matchDate);

            matchData.calName = club.fullname;
            matchData.title = getClubName(match.home.fullName) + ' vs ' + getClubName(match.away.fullName);
            matchData.location = match.venue.name + ', ' + match.venue.city;
            matchData.description = '🏆 ' + match.competition.name + '\n📺 Watch: ' + (match.broadcasters && match.broadcasters.length > 0 ? match.broadcasters[0].broadcasterName : null);
            matchData.start = [matchDate.getFullYear(), matchDate.getMonth() + 1, matchDate.getDate(), matchDate.getHours(), matchDate.getMinutes()];
            matchData.startInputType = 'local';
            matchData.duration = { hours: 2, minutes: 15 };
            formattedMatches.push(matchData);

            if (parseInt(match.matchDay) >= 37) {
              const { error, value } = ics.createEvents(formattedMatches);

              if (error) {
                console.log(error)
                return
              }

              fs.writeFile('public/mls.ics', value, (err) => {
                if (err) throw err;
                console.log(club.abbreviation + '.ics calendar file saved');
              });
            }
          }); // matches.forEach
    }); // .then
  // fetch
} // generateMLSCal

module.exports = generateTeamCals;
