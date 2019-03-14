const express = require('express');
const hds = require('express-handlebars');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

// Route import
const indexRoute = require('./routes/index');
const chatRoute = require('./routes/chat');

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

// Route
app.use('/', indexRoute);
app.use('/chat', chatRoute);

app.listen(process.env.PORT, () => 
  console.log(`http://localhost:${process.env.PORT}`));