const express = require('express');
const indexRoute = express.Router();

// User login page
indexRoute.get('/', (request, response) => {

  // if there is a session
  if (request.session.username) {
    response.redirect('/chat');
  } else {
    // Username == null flash message
    response.render('index', {
      flash: request.flash('username_null')
    });
  }

});

// user login method
indexRoute.post('/', (request, response) => {
  const { username } = request.body;

  if (username) {
    // session create
    request.session.username = username;
    response.redirect('/chat');
  } else {
    // username null
    request.flash('username_null', 'Kullanıcı adı boş olamaz.');
    response.redirect('/');
  }

});

module.exports = indexRoute;