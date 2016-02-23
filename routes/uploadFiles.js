var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');

router.get('/', function(req, res, next) {
    res.render('uploadFiles', {});
});


router.post("/", multer({ dest: './uploads/' }).single('myfile'), function(req, res, next){ 
    console.log(req.file);
    var uploadfile = __dirname + "//" + req.file.originalname;
    console.log(uploadfile);
    fs.readFile( req.file.path, function (err, data) {
        fs.writeFile(uploadfile, data, function (err) {
            var response = {};
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename: req.file.originalname
                };
            }
            console.log( response );
//            res.writeHead(200, {'Context-Type': 'application/json; charset=utf8'});
            res.end( JSON.stringify( response ) );
        });
    });
});



module.exports = router;
