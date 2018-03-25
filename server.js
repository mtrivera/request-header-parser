// server.js
// where your node app starts

// init project
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express')
const useragent = require('express-useragent');
const app = express()
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

// API URL
const api = '/api/whoami';

app.get(api, (req, res, next) => {
  const ipaddress = req.ip;
  const language = req.acceptsLanguages();
  const software = `OS: ${req.useragent.os}; Browser: ${req.useragent.browser}`;
  res.json({ipaddress, 'language': language[0], software});
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
