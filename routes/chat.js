const express = require('express');
const chatRoute = express.Router();

chatRoute.get('/', (request, response) => {
  response.render('chat');
});



module.exports = chatRoute;