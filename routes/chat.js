const express = require('express');
const chatRoute = express.Router();

chatRoute.get('/', (request, response) => {
  response.render('chat');
});

// get username
chatRoute.post('/', (request, response) => {
  response.send(request.body);
});

module.exports = chatRoute;