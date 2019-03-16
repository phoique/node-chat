const express = require('express');
const hds = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const dotenv = require('dotenv').config();

// Route import
const indexRoute = require('./routes/index');
const chatRoute = require('./routes/chat');

// Middleware
const isAuth = require('./middleware/isAuth');

// Express app
const app = express();

// Template engine. Default layout. x.hbs
app.engine('hbs', hds({ defaultLayout: 'layout', extname: 'hbs' }));
app.set('view engine', 'hbs');

// Static file js, css
app.use('/static', express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session and flash message
app.use(session({
  secret: process.env.SECRET_KEY,
  cookie: {
    maxAge: 60000
  },
  saveUninitialized: true,
  resave: true
}));
app.use(flash());

// Route
app.use('/', indexRoute);
app.use('/chat', isAuth, chatRoute);

app.listen(process.env.PORT, () => 
  console.log(`http://localhost:${process.env.PORT}`));