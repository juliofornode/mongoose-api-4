var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var GuestBook = mongoose.model('GuestBook');

/* GET all guestbook data. */
router.get('/', function(req, res) {
    GuestBook.find({},{},{sort: {date: -1}},function (err, data) {
        if (err) { res.send('{"msg":"No data"}'); return;}
        console.log(data);
        res.render('guestbook.jade', {title:"Guestbook",messages:data});
    });
});

router.post('/', function(req, res) {
    var message = new GuestBook({
        name: req.body.name,
        message: req.body.message
    });
    //console.log(req.body.name);
    message.save(function (err, message) {
        if (err) { res.send('{"msg":"Message not saved"}'); return;}
        console.log('Saving: '+ message);
        //res.render('guestbook.jade', {title:"Guestbook",messages:data});
        //res.render('post/view.jade', { post: post, comments: promise }
    });
    res.redirect('/guestbook/');
});

module.exports = router;
