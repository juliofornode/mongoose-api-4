/**
 * Created by luser on 23/07/14.
 */
var mongoose = require('mongoose');
//var mongooseTypes = require("mongoose-types");

//mongooseTypes.loadTypes(mongoose);

//mongoose.connect('mongodb://'+config.db.username+':'+config.db.password+'@'+config.db.host+':'+config.db.port+'/'+config.db.dbname);

var Email = mongoose.SchemaTypes.Email;


var guestbookSchema = {
    name: String,
    date: { type: Date, default: Date.now },
    message: String
};

module.exports = mongoose.model('GuestBook',guestbookSchema, 'guestbook');

