const express = require('express');
const chatRoute = express.Router();

// Chat page
chatRoute.get('/', (request, response) => response.render('chat'));

module.exports = chatRoute;