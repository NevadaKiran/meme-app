var express = require('express');
var router = express.Router();
var Meme = require('../models/meme.js');
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');
var request = require('request');
var dotenv = require('dotenv').config();
var rp = require('request-promise');
var http = require('http');

router.get('/', function(req, res) {
  User.findById({})
    .exec(function(err, user) {
      if (err) { console.log(err); }
      res.json({
        user: user,
        currentUser: req.session.currentUser
      });
    });
});

router.post('/',function(req, res){

  User.findById(req.body.userId)
  .exec(function(err, user) {
    if(err){console.log(err);}

    var newMeme = new Meme(req.body);
    user.memeList.push(newMeme);
    user.save();
    res.json({newMeme})
  });
});

router.post('/api', function(req, res) {
  rp.post(`https://api.imgflip.com/caption_image?template_id=${req.body.memeId}&username=${process.env.IMG_FLIP_USERNAME}&password=${process.env.IMG_FLIP_PASSWORD}&text0=${req.body.text0}&text1=${req.body.text1}`)
  .then(function(data) {

    res.json({url: JSON.parse(data).data.url});
  });

});



module.exports = router;
