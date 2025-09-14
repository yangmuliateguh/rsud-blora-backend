const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');

const app = express();
app.use(bodyParser.json());

app.use('/api', routes);
app.get('/', (req, res) => {
  res.send('RSUD Blora Backend API is running');
});
module.exports = app; 
