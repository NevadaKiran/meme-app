var express = require('express');
var router = express.Router();
var Meme = require('../models/meme.js');
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

router.get('/', function(req, res){
  console.log(req.body + "= req.body");
})

console.log("MEMES.JS");

module.exports = router;
