console.log('app.js works');

angular.module('memeApp')
//global data
.controller('HomeController', HomeController)
//deals with user
.controller('AuthController', AuthController)
//deals with memes
.controller('MemeController', MemeController)
.controller('RandomMemeController', RandomMemeController);


function HomeController($scope, $http){
  // var self = this;
  //
  // $scope.$on('userLoggedIn', function(event, data) {
  //   self.currentUser = data;
  // })
}

function AuthController($http, $state, $scope, $rootScope){
  console.log('Hit AuthController function in app.js');

  var self = this;


  function signup(newUserInfo){
    //test
    console.log('hit signup function in AuthController in app.js');
    console.log(newUserInfo);

    $http.post('/users', newUserInfo)
    .then(function(response){
      console.log(response);
      $state.go('login');
    });

  }

  function login(userInfo) {
    console.log('Hit Login Function');
    console.log(userInfo);
    $http.post('/sessions/login', userInfo)
      .then(function(response) {
        console.log(response);

        // $scope.$emit('userLoggedIn', response.data.data)
        // $rootScope.$emit('fetchData', response.data.data)
        $state.go('user');
      });
  }

  self.signup = signup;
  self.login = login;
}

function MemeController(){

}

function RandomMemeController($http, $state) {
  console.log('hit RandomMemeController in app.js');

  var self = this;

  self.randomMemesData = [];


  randomMemes();

  function randomMemes (){
    $http.get('/memes')
    .then(function(response){
      console.log(response);
      self.randomMemesData = response;
    });
  }
  self.randomMemes = randomMemes;

}
