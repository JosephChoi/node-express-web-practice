var mongo = require('mongodb');
var express = require('express');
var router = express.Router();

var Server = mongo.Server;
var Db = mongo.Db;
var BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('test', server);

var populateDB = function() {

    var users = [
        {
            _id: 'abc',
            city: 'seoul'
        },
        {
            _id: 'def',
            city: 'jeju'
        }];

    db.collection('users', function(err, collection) {
        collection.insert(wines, {safe:true}, function(err, result) {});
    });

};

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'test' database");
        db.collection('users', {safe:true}, function(err, collection) {
            if (err) {
                console.log("The 'users' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

router.get('/', function(req, res, next) {
//    db.collection('users').findOne({},function(err,doc){
//        if(err) throw err;
//        res.send(doc);
//    });
    db.collection('users').find().toArray(function(err, items){
        if(err){
            throw err;
        }
        res.send(items);
    });
});


module.exports = router;
