const express = require('express');
const chatRoute = express.Router();

// get username
chatRoute.post('/', (request, response) => {
  response.send(request.body);
});

module.exports = chatRoute;