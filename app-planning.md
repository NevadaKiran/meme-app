# Meme Generator App

## App Title: TBD

## What Will This App Do?
When you log in, it needs a user. A user has the ability to search and store memes. A user can also search for a meme by its subject/category. A user can also name the meme, save it, edit it, and delete it.

The user can also pick their top 10 memes to display on their show page. These top memes will be displayed as a heart or a star. A user will also have the ability to share their memes.

One reach goal that we already have in mind is to allow the user to create their own memes within the app.

## User Stories
As a user I want to:
- Sign up for an account
- Login to my account
- Search for memes
- Save a meme
- Indicate if a meme is a favorite
- Edit name of meme and favorite status
- Delete a saved meme
- See and search through a list of all user saved memes
- See featured memes on home page, delivered from the API
- Display my top 10 user favorite memes on user show page
- Have a way to share my memes
- (Reach) Choose how I want to display my top 10
- (Reach) Generate my own memes

## ERD
### Entities
User
- name
- email
- username
- password
- meme list

Memes
- name
- favorite
- category
- url
- created_at
- updated_at

### Javascript Objects
var user = {
  name: String,
  email: String,
  username: String,
  password: String,
  memeList: [memeSchema]
};

var memes = {
  name: String,
  favorite: Boolean,
  category: String,
  url: String,
  created_at: Date,
  updated_at: Date
}

### Relationships
var exampleUser = {
  name: 'test',
  username: 'test',
  email: 'test@test.com',
  password: 'test123',
  memes: [{
    var memeOne: [{
      name: 'Grumpy Cat',
      favorite: true,
      category: 'Cats',
      url: 'http://www.getcrumpycathere.com'
      created_at: 2/7/17,
      updated_at: 2/8/17
      }],
      var memeOne: [{
        name: 'Doge',
        favorite: false,
        category: 'dogs',
        url: 'http://www.itsadoge.com'
        created_at: 2/8/17,
        updated_at: 2/9/17
        }],
    }],
};

## Technical Specs
controllers
- users.js
- memes.js
db
- schema.js
models
- users.js
- memes.js
helpers
- auth.js
public
- css
 - style.css
- scripts
 - app.js
 - router.js
- partials
 - home.html -> display top memes and user memes
 - user.html -> display user favorite memes and top memes
 - update-meme.html -> form to update saved memes
 - login.html -> user login form
 - signup.html -> user signup form
 - generator.html -> meme creation form (Reach Goal)
- index.html -> nav bar and search bar
Procfile
package.json
server.js
Readme.md
