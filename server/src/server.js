require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const app = express();
const api = require('./api/');
const Itineraries = require('./controllers/itineraries');
const Legs = require('./controllers/legs');
const Carriers = require('./controllers/carriers');
const Agents = require('./controllers/agents');
const Places = require('./controllers/places');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', (req, res) => {
  api.livePricing.search(req.query)
  .then((results) => {
    var places      = new Places(results.Places);
    var carriers    = new Carriers(results.Carriers);
    var legs        = new Legs(results.Legs, carriers, places);
    var agents      = new Agents(results.Agents);
    var itineraries = new Itineraries(results.Itineraries, legs, agents);

    res.json(itineraries.getItineraries());
  })
  .catch(console.error);
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
