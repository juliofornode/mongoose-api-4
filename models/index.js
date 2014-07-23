/**
* this index will automatically load all models!!
*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

//mongoose.set('debug', true);

exports.GuestBook = require('./guestbook');
