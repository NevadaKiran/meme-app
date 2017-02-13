console.log('app.js works');

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

        $scope.$emit('userLoggedIn', response.data.data);
        $rootScope.$emit('fetchData', response.data.data);
        $state.go('user');
      });
  }

  function logout() {
    console.log('Hit Logout Function');
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
  setConfig();
  getConfig();

 function showCreate(currentUser){
   console.log('hit showCreate method in MemeController');
   console.log(currentUser);
   $state.go('createMeme');
 }

 function getBlankMemes(){
   $http.get('https://api.imgflip.com/get_memes')
   .then(function(response){
     console.log(response);
     self.blankMemes = response.data.data.memes;
   });
 }

 function setConfig(){
   $http.post('/config')
   .then(function(response){
     console.log(response);
   });
 }

 function getConfig(){
   $http.get('/config')
   .then(function(response){
     console.log(response);
     self.password = response.data.response[0].password;
     self.username = response.data.response[0].username;


   });
 }

 function getSavedMemes(currentUser){
  $http.get(`/user/${currentUser}/meme`)
    .then(function(response){
      console.log(response);
      self.savedMemes = [];
      self.savedMemes = response.data.currentUser.memeList;
    })
  }

 function saveMeme(newMeme, currentUser){
   console.log(currentUser);
   $http.post(`/user/${currentUser}/meme`, newMeme).
   then(function(response) {
     console.log(response);

   });
 }
  function createMeme(newMemeInfo, memeId, currentUser) {

     $http.post(`https://api.imgflip.com/caption_image?template_id=${memeId}&username=${self.username}&password=${self.password}&text0=${newMemeInfo.topText}&text1=${newMemeInfo.bottomText}`)
     .then(function(response) {
       console.log('hit then');
       console.log(newMemeInfo);
       console.log(memeId);
       console.log(currentUser);
       console.log(response);

     self.newMeme = {
       name: newMemeInfo.name,
       category: newMemeInfo.category,
       url: response.data.data.url,
       text0: newMemeInfo.topText,
       text1: newMemeInfo.bottomText,
       currentUser: currentUser
      }
      console.log(self.newMeme);

      self.memeUrl = response.data.data.url;

     $(".modal-showNewMeme").children().css("display", "block");

     $(".modal-body > form").css("display", "none");

     saveMeme(self.newMeme, currentUser);
     getSavedMemes(currentUser);
     $state.go('user');

    //  $(".modal-body").children().css("display", "none");
     //
    //  $(".modal-body").css("display", "block");

   });
}

 function editCreateMeme(){

 }

 function showCreateMemeModal(meme){
   console.log('hit modal');
   console.log(meme);
   $(".modal-showNewMeme").children().css("display", "none");
   $("#modal").css("display", "block");

   self.memeUrl = meme.url;
   self.memeName = meme.name;
   self.memeId = meme.id;
 }

 function closeCreateMemeModal(){
   console.log('hit close modal');
   $("#modal").css("display", "none");
 }



 self.createMeme = createMeme;
 self.closeCreateMemeModal = closeCreateMemeModal;
 self.showCreateMemeModal = showCreateMemeModal;
 self.showCreate = showCreate;
 self.getBlankMemes = getBlankMemes;
 self.setConfig = setConfig;
 self.getConfig = getConfig;
 self.saveMeme = saveMeme;
 self.getSavedMemes = getSavedMemes;
}

function RandomMemeController($http, $state) {
  console.log('hit RandomMemeController in app.js');

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
