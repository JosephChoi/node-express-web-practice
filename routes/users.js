var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//    res.send('respond with a resource');
    
    var name = req.signedCookies.name;
    console.log("name cookie is : " + name);

    res.clearCookie('name');
    
    console.log("name session is : " + req.session.name);
    
    var datas = { 
        username: '',
        phone: ''
    };
    res.render('users', datas);
});

router.post('/', function(req, res, next) {
    
    req.accepts('application/json');
    
    console.log('1 > ' + req.get('Content-Type'));
    console.log('2 > ' + req.body);
    console.log('3 > ' + req.body.username);
    
    
    
    if(req.is('json')){
        res.type('application/json');
        res.json(req.body);
    }else{
        var datas = { 
            username: req.body.username,
            phone: req.body.phone
        };
        res.render('users', datas);
        
    }
    
    
    
    
});



module.exports = router;
