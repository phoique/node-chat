const express = require('express');
const indexRoute = express.Router();

// User login page
indexRoute.get('/', (request, response) => {
  response.render('index');
});

module.exports = indexRoute;