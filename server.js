// PACKAGES
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var json = require('json');
var dotenv = require('dotenv').config();

// CONTROLLERS
var memesController = require('./controllers/memes.js');
var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');
var randomMemeController = require('./controllers/randomMemeController.js');

var app = express();

//------------------------------
// MIDDLEWARE
app.use(express.static('public'));

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/meme-app'
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(session({
  secret: "solange",
  resave: true,
  maxAge: 20 * 60 * 1000,
  saveUninitialized: false
}));

app.use('/memes', randomMemeController);
app.use('/users', usersController);
app.use('/user/:id/meme', memesController);
app.use('/sessions', sessionsController);

// LISTENERS
app.listen(process.env.PORT || 3000, function(){
  console.log("Listening to 3000");
});
