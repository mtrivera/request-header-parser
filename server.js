// server.js
// where your node app starts
'use strict';
// init project
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express')
const useragent = require('express-useragent');
const app = express()

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());
// This ensures the correct IP address is outputted:
// https://stackoverflow.com/questions/10849687/express-js-how-to-get-remote-client-address
// Haozhun's solution solved my issue
app.enable('trust proxy');

// API URL
const api = '/api/whoami';

app.get(api, (req, res) => {
  const ipaddress = req.ip;
  const language = req.acceptsLanguages();
  const software = `OS: ${req.useragent.os}; Browser: ${req.useragent.browser}`;
  res.json({ipaddress, 'language': language[0], software});
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
