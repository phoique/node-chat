const express = require('express');
const indexRoute = express.Router();

// User login page
indexRoute.get('/', (request, response) => {

  // Username == null flash message
  response.render('index', {
    flash: request.flash('username_null')
  });

});

// user login and chat redirect
indexRoute.post('/', (request, response) => {
  const { username } = request.body;

  // username != null
  if(username) {
    response.redirect('/chat');
  }
  else {
    request.flash('username_null', 'Kullanıcı adı boş olamaz.');
    response.redirect('/');
  }

});

module.exports = indexRoute;