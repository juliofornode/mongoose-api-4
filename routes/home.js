/**
 * routes/home.js
 * The home page, just renders the jade tamplate
 * https://github.com/pello-io/simple-express-mongoose
 * Pello Altadill - http://pello.info
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index.jade' , {title: 'Home page'});
});

module.exports = router;