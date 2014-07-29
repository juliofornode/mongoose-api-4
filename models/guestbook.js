/**
 * guestbook.js
 * Model file for the guestbook data
 * https://github.com/pello-io/simple-express-mongoose
 * Pello Altadill - http://pello.info
 */
var mongoose = require('mongoose');

    var guestbookSchema = {
        name: { type: String, required: true, validate: [validateText, 'error pers. na']},
        age: { type: Number, required: true, min: [0, 'The value of path `{PATH}` ({VALUE}) is beneath the limit ({MIN}).'], max: 99 },
        date: { type: Date, default: Date.now },
        message: {type: String, required: [true, 'Message required yo meeen']}
    };


    function validateText(str) {
        console.log('Yaeh men commn ' + i18n.t("app.name"));
        return str.length > 2 && str.length < 20;
    }


// The third parameter is to make sure that mongoose maps
// the schema to a collection called 'guestbook'
guestbookModel = mongoose.model('GuestBook', guestbookSchema, 'guestbook');
//guestbookModel.schema.path('name').validate(validateText,msgerr);
module.exports = guestbookModel;

//  var guestbook = mongoose.model('GuestBook', guestbookSchema, 'guestbook');