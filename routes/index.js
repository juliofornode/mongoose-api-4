/**
 * routes/index.js
 * All routes are here to import all of them just with one command
 * in the main app.js
 * https://github.com/pello-io/simple-express-mongoose
 * Pello Altadill - http://pello.info
 */

var home = require('./home');
var guestbook = require('./guestbook');
var session = require('./session');

module.exports = function (app) {
    home(app);
    guestbook(app);
    session(app);
}
