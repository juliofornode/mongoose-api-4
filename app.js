/**
* app.js
* Main entrypoint for the app
* https://github.com/pello-io/simple-express-mongoose
* Pello Altadill - http://pello.info
*/
var express = require('express');
var bodyParser = require('body-parser');

var models = require('./models');
var routes = require('./routes');
var middleware = require('./middleware');

var app = express();

// If we want to use post data:
app.use(bodyParser());

// We set middleware
middleware(app);

// We set routes
routes(app);

// We set static content
app.use(express.static('public'));

// And there we go, listening on port 3000
app.listen(3000, function () {
    console.log('now listening on http://localhost:3000');
});