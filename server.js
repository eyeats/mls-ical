// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const clubsData = require('./data/clubs.json');

app.use(express.static("public"));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

clubsData.forEach(club => {
  app.get(`/${club.abbreviation}`, function (request, response) {
    const url = __dirname + `/public/${club.abbreviation}.ics`;
    response.sendFile(url);
  });
});

// listen for requests :)
const listener = app.listen(3110, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
