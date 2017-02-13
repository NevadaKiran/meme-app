console.log('hit memes.js controller');

var express = require('express');
var router = express.Router();
var Meme = require('../models/meme.js');
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

//post request to imfFlip for meme creation
router.post('/', function(req, res) {

  var meme = new Meme({
    name: req.body.name,
    url: req.body.url,
    category: req.body.category,
    text0: req.body.text0,
    text1: req.body.text1
  });
  console.log(req.body.currentUser);
  User.findById(req.body.currentUser)
  .exec(function(err, user){
    if(err){ console.log(err); }
    console.log(user);
    // var newMeme = new Meme(meme);
    user.memeList.push(meme);
    user.save();
  });
});

module.exports = router;
