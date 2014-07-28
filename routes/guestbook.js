/**
 * routes/guestbook.js
 * The router for guestbook operations.
 * Keep in mind that here '/' refers to '/guestbook/'
 * https://github.com/pello-io/simple-express-mongoose
 * Pello Altadill - http://pello.info
 */

var mongoose = require('mongoose');

var GuestBook = mongoose.model('GuestBook');

module.exports = function (app) {
    /**
     * get
     * GETs all guestbook data.
     */
    app.get('/guestbook/', function (req, res) {
        GuestBook.find({}, {}, {sort: {date: -1}}, function (err, data) {
            if (err) {
                res.send('{"msg":"No data"}');
                return;
            }
            console.log(data);
            res.render('guestbook.jade', {title: "Guestbook", messages: data});
        });
    });

    /**
     * post
     * saves a new guestbook message
     */
    app.post('/guestbook/', function (req, res) {
        var message = new GuestBook({
            name: req.body.name,
            message: req.body.message
        });
        message.save(function (err, message) {
            if (err) {
                res.send('{"msg":"Message not saved"}');
                return;
            }
            console.log('Saving: ' + message);
        });
        res.redirect('/guestbook/');
    });

}