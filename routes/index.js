const express = require('express');
const indexRoute = express.Router();

indexRoute.get('/', (request, response) => {
  response.render('index');
});

module.exports = indexRoute;