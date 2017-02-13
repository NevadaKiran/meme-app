angular.module('memeApp')
//global data
.controller('HomeController', HomeController)
//deals with user
.controller('AuthController', AuthController)
//deals with user created memes
.controller('MemeController', MemeController)
//deals with seeded memes
.controller('RandomMemeController', RandomMemeController);

function HomeController($scope, $http){
  var self = this;

  $scope.$on('userLoggedIn', function(event, data) {
    self.currentUser = data;
  })

  $scope.$on('userLoggedOut', function(event, data) {
    self.currentUser = null;
  })

  // $broadcast('currentUser', self.currentUser);
}

function AuthController($http, $state, $scope, $rootScope){

  var self = this;

  function signup(newUserInfo){

    $http.post('/users', newUserInfo)
    .then(function(response){
      $state.go('login');
    });

  }

  function login(userInfo) {
    $http.post('/sessions/login', userInfo)
      .then(function(response) {
        $scope.$emit('userLoggedIn', response.data.data);
        $rootScope.$emit('fetchData', response.data.data);
        $state.go('user');
      });
  }

  function logout() {
    $http.delete('/sessions')
      .then(function(response) {
        $scope.$emit('userLoggedOut');
        $state.go('index');
      });
  }

  self.logout = logout;
  self.signup = signup;
  self.login = login;
}

function MemeController($http, $state, $scope){
  var self = this;
  self.blankMemes = [];
  self.memeUrl = '';
  self.memeId = '';
  self.memeName = '';
  self.newMeme = {};
  self.password = '';
  self.username = '';
  getBlankMemes();


 function showCreate(currentUser){
   $state.go('createMeme');
 }

 function getBlankMemes(){
   $http.get('https://api.imgflip.com/get_memes')
   .then(function(response){
     self.blankMemes = response.data.data.memes;
   });
 }

 function getSavedMemes(currentUser){
  $http.get(`/user/${currentUser}/meme`)
    .then(function(response){
      console.log('getSavedMemes response');
      console.log(response);
      self.savedMemes = [];
      self.savedMemes = response.data.currentUser.memeList;
      console.log('this is self.savedMemes from getSaveMeme');
      console.log(self.savedMemes);
    })
  }

 function saveMeme(newMeme, url, currentUser){
   console.log(currentUser);

   var newMemeInfo = {
     name: newMeme.name,
     category: newMeme.category,
     text0: newMeme.text0,
     text1: newMeme.text1,
     userId: currentUser,
     url: url
   }

   $http.post(`/user/${currentUser}/meme`, newMemeInfo).
   then(function(response) {
     console.log('this is save meme response');
     console.log(response);
     console.log('this is self.savedMemes from saveMeme');
     console.log(self.savedMemes);
     getSavedMemes(currentUser);

   });
 }
  function createMeme(newMemeInfo, memeId, currentUser) {

    self.newMeme = {
     name: newMemeInfo.name,
     category: newMemeInfo.category,
     text0: newMemeInfo.topText,
     text1: newMemeInfo.bottomText,
     memeId: memeId,
     currentUser: currentUser
    }
    console.log(self.newMeme);

    $http.post(`/user/${currentUser}/meme/api`, self.newMeme)
    .then(function(response) {
      console.log('response from backend');
      console.log(response);
      console.log('this is the url');
      self.memeUrl = response.data.url;
      console.log(self.memeUrl);

      saveMeme(self.newMeme, self.memeUrl,  currentUser );


    $(".modal-showNewMeme").children().css("display", "block");

    $(".modal-body > form").css("display", "none");

    $state.go('user');

    });

    //  $(".modal-body").children().css("display", "none");
     //
    //  $(".modal-body").css("display", "block");

}

 function editCreateMeme(){

 }

 function showCreateMemeModal(meme){
   $(".modal-showNewMeme").children().css("display", "none");
   $("#modal").css("display", "block");

   self.memeUrl = meme.url;
   self.memeName = meme.name;
   self.memeId = meme.id;
 }

 function closeCreateMemeModal(){
   $("#modal").css("display", "none");
 }



 self.createMeme = createMeme;
 self.closeCreateMemeModal = closeCreateMemeModal;
 self.showCreateMemeModal = showCreateMemeModal;
 self.showCreate = showCreate;
 self.getBlankMemes = getBlankMemes;
 self.saveMeme = saveMeme;
 self.getSavedMemes = getSavedMemes;
}

function RandomMemeController($http, $state) {

  var self = this;

  self.shuffledMemesData =[];

    // USE THIS TO SHUFFLE YOUR ARRAYS

     function shuffle() {
       $http.get('/memes')
       .then(function(response){
        for(var j, x, i = response.data.randomMemes.length;
          i; j = Math.floor(Math.random() * i),
        x = response.data.randomMemes[--i],
        response.data.randomMemes[i] = response.data.randomMemes[j],
        response.data.randomMemes[j] = x);
        self.shuffledMemesData = response.data.randomMemes;
       })
    }
    shuffle();

  self.shuffle = shuffle;
}
