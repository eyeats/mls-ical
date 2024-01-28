// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const clubsData = require('./data/clubs.json');

app.use(express.static("public"));

app.get("/", function (request, response) {
  let abbreviations = [];
  clubsData.forEach(club => {
    abbreviations.push(club.abbreviation);
  });
  response.send(abbreviations);
});

clubsData.forEach(club => {
  app.get(`/${club.abbreviation}`, function (request, response) {
    response.sendFile(__dirname + `/public/${club.abbreviation}.ics`);
  });
});

// listen for requests :)
const listener = app.listen(3110, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
