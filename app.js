/**
* app.js
* Main entrypoint for the app
* https://github.com/pello-io/simple-express-mongoose
* Pello Altadill - http://pello.info
*/
var express = require('express');
var bodyParser = require('body-parser');
var i18next = require('i18next');

var models = require('./models');
var routes = require('./routes');
var middleware = require('./middleware');


//i18n.init({  lng: 'en-US' ,preload: ['en-US', 'es-ES'],debug: true});
/*i18n.init({ preload: ['en-US', 'es-ES'],debug: true}), function (t) {
 console.log('Loaded resources ');
 }*/;
i18next.init({  lng: 'es-ES',fallbackLng: 'es-ES' ,preload: ['en-US', 'es-ES'],debug: true},function(t) {
    console.log('Loaded resources ');
    console.log('Lang:' + i18next.lng() +', ' + i18next.t("form-comment.name_error") + ', ' + i18next.t("app.name"));
    i18next.setLng('es-ES', function(t) { /* loading done */ });
});


var app = express();

// i18n
app.use(i18next.handle);
i18next.registerAppHelper(app)

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