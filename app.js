const express = require('express');
const hds = require('express-handlebars');
const dotenv = require('dotenv').config();
const indexRoute = require('./routes/index');


// Express app
const app = express();

// Template engine. Default layout. x.hbs
app.engine('hbs', hds({ defaultLayout: 'layout', extname: 'hbs' }));
app.set('view engine', 'hbs');

// Static file js, css
app.use('/static', express.static('public'));

// Route
app.use('/', indexRoute);

app.listen(process.env.PORT, () => 
  console.log(`http://localhost:${process.env.PORT}`));