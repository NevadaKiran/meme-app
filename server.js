// PACKAGES
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');

// CONTROLLERS
var memesController = require('./controllers/memes.js');
var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');
var seedsController = require('./controllers/seeds.js');

var app = express();

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
  saveUninitialized: false
}));

app.use('/users', usersController);
app.use('/users/:id/memes', memesController);
app.use('/sessions', sessionsController);
app.use('/seeds', seedsController);

// LISTENERS
app.listen(3000, function(){
  console.log("Listening to 3000");
});
