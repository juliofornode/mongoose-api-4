/**
 * guestbook.js
 * Model file for the guestbook data
 * https://github.com/pello-io/simple-express-mongoose
 * Pello Altadill - http://pello.info
 */
var mongoose = require('mongoose');

var guestbookSchema = {
    name: String,
    date: { type: Date, default: Date.now },
    message: String
};

// The third parameter is to make sure that mongoose maps
// the schema to a collection called 'guestbook'
module.exports = mongoose.model('GuestBook',guestbookSchema, 'guestbook');