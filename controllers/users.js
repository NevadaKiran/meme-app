var express = require('express');
var router = express.Router();
var Meme = require('../models/meme.js');
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

router.post('/', authHelpers.createSecure, function(req, res){

  console.log("backend post route");

  var user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password_digest: res.hashedPassword
  });

  user.save(function(err, user){
    if(err){ console.log(err); }
    console.log(user);
    res.json({status: 201, message: 'user created'});
  });

});



module.exports = router;
