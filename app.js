const express = require('express');
const generateCals = require('./generateCals');
const clubsData = require('./data/clubs.json');

const app = express();
const port = 3003;

app.get("/cron", (req, res) => {
  clubsData.forEach(club => {
    generateCals(club.abbreviation);
  });
  res.sendStatus(200);
});
