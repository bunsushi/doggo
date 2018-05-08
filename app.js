var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./app/routes');

var app = express();

var PORT = process.env.PORT || 5000;

app.use(express.static('app/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require ('./app/routes/index.js');

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
  });  