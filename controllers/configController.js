var express = require('express');
var router = express.Router();
var Config = require('../models/config.js');
var dotenv = require('dotenv').config();


router.post('/', function(req, res){
  var config = new Config({
    username: process.env.IMG_FLIP_USERNAME,
    password: process.env.IMG_FLIP_PASSWORD
  });

  config.save(function(err, config){
    if(err){ console.log(err); }
    // console.log(config);
    res.json({status: 201, message: 'config created'});
  });

});

router.get('/', function(req, res){
  Config.find({})
  .exec(function(err, response){
    if(err){ console.log(err); }
    // console.log(response);
    res.json({response});
  });
});

module.exports = router;
