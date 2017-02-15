# Meme Generator App

## App Title: All The Memes

## What Will This App Do?
All The Memes is an app designed to store and create internet memes. There are two main components: a database of memes that are available to view, and a feature where a user can create their own. Each user will sign-up for an account which will unlock their own user page. On this page, the user will have three lists of memes: memes the user creates and saves, a list of user designated favorite memes, and a meme feed of the memes stored in the app database.

While searching for a meme from our database, the user has the option of searching by the meme name and/or the categories associated with the meme. These fields are displayed above and below each meme. When a user creates a meme, they will be able to input a meme name, its search categories, and the top and bottom meme text. The user will also be able to edit the meme name and categories from their user page after memes are saved. The favorite feature will allow the user to dynamically choose which memes to include or not include in their favorite memes list. This is accomplished through a 'favorite' icon beneath each created meme on the user page. Finally, the user will also have the option to delete their created memes from their user page.

The concept for this app did undergo a change early on in the planning process. Originally, it was intended for the meme search, save, and favorite features to comprise our MVP goals while the meme generation would be a reach goal. We also intended to find an appropriate API that could accomplish our desired MVP and Reach goals. However, we could not find an API that would allow us to send get requests from a database of memes. After considering our options, we elected to build our own database of memes and include one reliable API to incorporate the meme generation component of our app.

Below, you will find the various aspects of our planning process that helped us build All The Memes.

## User Stories
As a user I want to be able to:
- View a homepage that displays memes
 - This includes the name and categories of each meme
- Sign up for an account
- Login to my account to view my own user page
- Have my account settings saved and accessible
  - I will need a model that holds my:
    - Username
    - Name
    - Email
    - Password
- Easily search for memes
  - By Name
  - By Category
- Create my own memes with:
  - A Name
  - Categories
  - Top Text
  - Bottom Text
  - Favorite Value
  - A Url
- Save any meme that I create
- Be able to view my saved memes
- Have my memes persist when I login and logout
- Indicate if a meme I create is a favorite
- Decide if I no longer want a meme as a favorite
- Edit the name and/or categories of my memes
- Delete my saved memes
- See a meme feed on my user page of the memes from the database
- (Reach Goal) See and search through a list of all user saved memes
- (Reach Goal) Display my top 10 user favorite memes on user show page
- (Reach Goal) Have a way to share my memes
- (Reach Goal) Choose how I want to display my top 10

## Wireframes
### Home Page:
![Home Page](/public/images/home-page.png)
### Sign Up:
![Sign-Up Page](/public/images/sign-up.png)
### Login:
![Login Page](/public/images/login.png)
### User Show:
![User Show Page](/public/images/user-show.png)
### Edit:
![Edit Page](/public/images/edit-page.png)

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
Update: We added text0 and text1 in the memes object to help with the creation of memes. Since we decided to make this a core component of our app, rather than a reach goal, we needed to add these data fields in to pass the appropriate object to the API.

```Javascript
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
  text0: String,
  text1: String,
  created_at: Date,
  updated_at: Date
}
```
### Relationships
```Javascript
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
      created_at: `2017-02-06T15:51:53.072Z`,
      updated_at: `2017-02-07T15:51:53.072Z`
      }],
      var memeOne: [{
        name: 'Doge',
        favorite: false,
        category: 'dogs',
        url: 'http://www.itsadoge.com'
        created_at: `2017-02-07T15:51:53.072Z`,
        updated_at: `2017-02-08T15:51:53.072Z`
        }],
    }],
};
```
## Technical Specs
### Folder Structure:
```
controllers
- memes.js
- randomMemeController.js
- sessions.js
- users.js
db
- schema.js
- seeds.js
helpers
- auth.js
models
- meme.js
- user.js
public
- css
  - styles.css
- images
- partials
  - createMeme.html -> meme creation form
  - home.html -> display database memes
  - login.html -> user login form
  - signup.html -> user signup form
  - user.html -> display user favorite memes, saved memes, and meme list
- scripts
  - app.js
  - router.js
- index.html -> nav bar and search bar
.gitignore
package.json
Procfile
Readme.md
server.js
```

### Technologies Used
HTML5
CSS3
JavaScript
jQuery
Node.js
Express.js
Mongo
Mongoose
Angular.js

### API
Imgflip API: https://api.imgflip.com/

### Required Packages
```
bCrypt
body-parser
dotenv
express
express-session
http
json
mongoose
mongoose-seed
morgan
request
request-promise
```

## MVP Goals - Original
- Get a meme, save it, update it, and delete it
- User needs to be able to sign up, login, and logout
- Store user saved memes in database so they persist
- Search for memes, either by name or category (If not included in API, we will find a way to incorporate it)

## MVP Goals - Updated: Met On 2/14/17
- Display memes from database on homepage
- Use Angular to incorporate a search bar
- Setup Imgflip API to allow a user to create memes
- Save memes from Imgflip into User object
- Get saved memes to display on user page
- Edit name and category of saved memes
- Delete saved memes

## Reach Goals - Original
- Indicate a meme as a favorite
- Users are able to create their own memes and save them
- Users will be able to share their memes
- Users can choose how to display their top 10 memes, i.e. list, grid, etc.
- On home page, have top memes of the day appear as a feed

## Reach Goals - Updated
- (Met) Randomize memes displayed on home page
- (Met) Indicate a meme as a favorite
- View and search through other user created memes
- Share user created memes
- Display top 10 user favorite memes on user show page
- Add a user option to choose a display layout for top 10 memes

## Project Challenges and Unresolved Issues
1) Our first challenge came from the save/post route when implementing the meme create component of the app. We were successful in saving created memes into the appropriate user object on our backend server, however when we had difficulty displaying those saved memes on the front-end. Once the redirect completed, the meme was saved in the object but failed to render unless we logged out and in of the user that created the meme.

We considered multiple causes for this issue, which included checking for a race condition and the API get requests. In the end, our issue came from our back-end get request. We were calling the User by id, yet we weren't properly calling the user in the object. Once we fixed this, we were able to successfully add a created meme to the user save list immediately.

2) The second issue we've encountered is coming from the authentication portion of our app. When you refresh the browser on the user page, the session is lost since we are using Angular. Yet, you are able to still manipulate the user page as normal which includes editing, favoriting, and deleting memes from the last user. Additionally, a user was able to login to a user page that wasn't theirs if they entered their login credentials correctly.

We were able to add a block on the user page that prevents the user from logging into any other user page that isn't their own. The issue with refreshing the browser still exists, but fortunately we have found two potential solutions in the form of Angular services and ng-store. We ran out of time before we could implement either of these solutions, and plan to revist our app to fix this issue sometime in the future.

3) We were hoping to fulfill another reach goal which would allow users to share the memes they create. We know how to access the url from each meme in our user object, and we were hoping for more time to actually implement this into the app. This will be another reach goal we return to once time permits.

## Conclusion
Overall, we are happy with how All The Memes evolved and was executed. As a team, we were able to collaborate effectively to accomplish not only our individual tasks but also peer program as often as we could. This resulted in the app we have completed today. Moving forward, we are discussing plans to revisit our reach goals, fix our current bugs, and improve overall UX design.
