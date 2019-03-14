const express = require('express');
const indexRoute = express.Router();

// User login page
indexRoute.get('/', (request, response) => {
  response.render('index');
});

// user login and chat redirect
indexRoute.post('/', (request, response) => {
  const { username } = request.body;

  // username != null
  if(username) {
    response.redirect('/chat');
  }
  else {
    response.send();
  }


});

module.exports = indexRoute;