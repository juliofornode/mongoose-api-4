var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index.jade' , {title: 'Home page'});
});

module.exports = router;