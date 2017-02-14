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
  User.findById(req.session.currentUser._id)
    .exec(function(err, user) {
      if (err) { console.log(err); }
      res.json({
        currentUser: user
      });
    });
});

router.post('/api', function(req, res) {
  rp.post(`https://api.imgflip.com/caption_image?template_id=${req.body.memeId}&username=${process.env.IMG_FLIP_USERNAME}&password=${process.env.IMG_FLIP_PASSWORD}&text0=${req.body.text0}&text1=${req.body.text1}`)
  .then(function(data) {

    User.findById(req.body.userId)
    .exec(function(err, user) {
      if(err){console.log(err);}

      var newMeme = new Meme({
        name: req.body.name,
        category: req.body.category,
        text0: req.body.text0,
        text1: req.body.text1,
        url: JSON.parse(data).data.url
      });

      user.memeList.push(newMeme);

      user.save(function(err, data){
        if(err) console.log(err);
        res.json(newMeme);
      });
    });
  });
});

router.put('/:id', function(req, res) {
  console.log('hit backend put route');
  console.log(req.body);
  User.findById(req.session.currentUser._id).exec()
    .then(function(user) {
      console.log('Checking Meme List Id');
      console.log(user.memeList.id)
      var meme = user.memeList.id(req.params.id);

      meme.name = req.body.name;
      meme.category = req.body.category;
      meme.favorite = req.body.favorite;

      user.save();
      console.log(user);
      res.json({ meme: user.memeList.id(req.params.id) });
    })
    .catch(function(err) {
      res.json(err)
    })
});

router.delete('/:id', function(req, res){

  User.findById(req.session.currentUser._id).exec()
     .then(function(user){
       user.memeList.id(req.params.id).remove();
       user.save();
       res.json({ user });
     })
     .catch(function(err) {
       res.json(err)
     })
});

module.exports = router;
