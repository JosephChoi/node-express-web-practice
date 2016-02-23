var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.cookie('name', 'hojin', {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
        signed: true
    });
    
    req.session.name = 'hojin';
    
    res.render('index', { title: 'Express' });
});



module.exports = router;
