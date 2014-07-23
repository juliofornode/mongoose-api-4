
var express = require('express');
var bodyParser = require('body-parser');

var models = require('./models');
var index = require('./routes');

var app = express();


// If we want post data:
app.use(bodyParser());

app.use('/', index.home);
app.use('/guestbook', index.guestbook);

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('now listening on http://localhost:3000');
});