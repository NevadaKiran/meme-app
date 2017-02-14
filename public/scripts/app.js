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
        $state.go('user', {userId: response.data.data._id});
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

function MemeController($http, $state, $scope, $stateParams){
  var self = this;

  getBlankMemes();
  getSavedMemes($stateParams.userId);

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
      self.savedMemes = [];
      self.savedMemes = response.data.currentUser.memeList;
    })
  }

  function createMeme(newMemeInfo, memeId, currentUser) {

    self.newMeme = {
     name: newMemeInfo.name,
     category: newMemeInfo.category,
     text0: newMemeInfo.topText,
     text1: newMemeInfo.bottomText,
     memeId: memeId,
     userId: currentUser
    }

    $http.post(`/user/${currentUser}/meme/api`, self.newMeme)
    .then(function(response) {
      $state.go('user', {userId: currentUser}, {reload: true});
    });
  }

 function editMeme(update, memeId, userId){
   console.log('hit editCreateMeme');
   console.log(update);
   console.log(memeId);
   console.log(userId);

  //  showEditModal(meme);

  //  $http.put(`/user/${currentUser}/meme/${memeId}`, )
  //  .then(function(response) {
  //    console.log('response');
  //  });
 }

 function favoriteMeme(currentUser, meme){
   console.log('favoriteMeme');
   console.log(currentUser);
   console.log(meme);

   $http.put(`/user/${currentUser}/meme/${meme._}`)
   .then(function(response) {
     console.log('response');
     console.log(response);
   });
 }

  function showEditModal (meme){
    $(".editMemeModal").css("display", "block");
    console.log(meme);

    self.editMemeValue = meme;
  }

  function closeEditModal (){
    $("#editModal").css("display", "none");
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

 function deleteMeme(currentUser, memeId){
 $http.delete(`/user/${currentUser}/meme/${memeId}`)
 .then(function(response){
   getSavedMemes(currentUser);
  })
 }
 self.closeEditModal = closeEditModal;
 self.showEditModal= showEditModal;
 self.favoriteMeme = favoriteMeme;
 self.editMeme = editMeme;
 self.deleteMeme = deleteMeme;
 self.createMeme = createMeme;
 self.closeCreateMemeModal = closeCreateMemeModal;
 self.showCreateMemeModal = showCreateMemeModal;
 self.showCreate = showCreate;
 self.getBlankMemes = getBlankMemes;
 self.getSavedMemes = getSavedMemes;
}

function RandomMemeController($http, $state) {

  var self = this;

  self.shuffledMemesData =[];

    // USE THIS TO SHUFFLE YOUR ARRAYS
    //Credits: code adapted from memory game lab WDIR General Assembly
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
