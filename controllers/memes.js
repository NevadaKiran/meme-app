var express = require('express');
var router = express.Router();
var Meme = require('../models/meme.js');
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

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

router.post('/', function(req, res) {

  var meme = new Meme({
    name: req.body.name,
    url: req.body.url,
    category: req.body.category,
    text0: req.body.text0,
    text1: req.body.text1
  });

  User.findById(req.body.currentUser)
  .exec(function(err, user){
    if(err){ console.log(err); }
    user.memeList.push(meme);
    user.save();
  });
});

module.exports = router;
