var mqtt = require('mqtt');
var mqttClient = mqtt.connect('mqtt://test.mosquitto.org');
var express = require('express');
var router = express.Router();

mqttClient.on('connect', function(){
    mqttClient.subscribe('presence');
    mqttClient.publish('presence', 'Hello mqtt this is joseph');
    console.log('connected mqtt');
});

mqttClient.on('message', function(topic, message){
    console.log('mqtt message callback');
    console.log(message.toString());
});

router.get('/', function(req, res, next) {
    res.send('');
});


module.exports = router;
