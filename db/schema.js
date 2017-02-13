var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var MemeSchema = new Schema({
  name: String,
  favorite: {type: Boolean, default: false},
  category: String,
  url: String,
  text0: String,
  text1: String,
  created_at: Date,
  updated_at: Date
});

var UserSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password_digest: String,
  memeList: [MemeSchema]
});

MemeSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

var UserModel = mongoose.model('User', UserSchema);
var MemeModel = mongoose.model('Meme', MemeSchema);

module.exports = {
  User: UserModel,
  Meme: MemeModel
};
