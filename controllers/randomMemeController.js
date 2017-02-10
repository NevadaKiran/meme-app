var express = require('express');
var router = express.Router();
var Meme = require('../models/meme.js');

router.get('/', function(req, res){
  Meme.find({})
  .exec(function(err, randomMemes){
    if(err){ console.log(err); }
    console.log(randomMemes);
    res.json({randomMemes});
  });
})


module.exports = router;
