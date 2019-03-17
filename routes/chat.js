const express = require('express');
const chatRoute = express.Router();

const fakeMessages = [
  {
    id: 1,
    username: "admin",
    message: "Hello World."
  },
  {
    id: 2,
    username: "admin",
    message: "Hi!"
  },
  {
    id: 3,
    username: "user",
    message: "Hi admin!"
  }
];

// Chat page
chatRoute.get('/', (request, response) => {
  // login username 
  let lusername = request.session.username;
  
  response.render('chat', {
    messages: fakeMessages,
    lusername: lusername,
  });
});

// New message
chatRoute.post('/', (request, response) => {
  // last id
  let id = 3;

  // fake data push 
  fakeMessages.push({
    id: id++, 
    message: request.body.message, 
    username: request.session.username
  });
  response.redirect('/chat');
});

module.exports = chatRoute;