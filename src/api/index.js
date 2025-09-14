const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');

const app = express();
app.use(bodyParser.json());

app.use('/api', routes);
app.get('/api', (req, res) => {
  res.send('📡 Welcome to RSUD Blora API root');
});

module.exports = app; 
