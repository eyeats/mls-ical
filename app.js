const express = require('express')
const generateCals = require('./generateCals')

const app = express()
const port = 3003

app.get("/cron", (req, res) => {
  generateCals();

  res.sendStatus(200) // sends an "OK" response
})
