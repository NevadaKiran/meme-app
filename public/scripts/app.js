console.log('app.js works');

angular.module('memeApp')
//global data
.controller('HomeController', HomeController)
//deals with user
.controller('AuthController', AuthController)
//deals with memes
.controller('MemeController', MemeController);


function HomeController(){

}

function AuthController($http){
  console.log('Hit AuthController function in app.js');
}

function MemeController(){

}
