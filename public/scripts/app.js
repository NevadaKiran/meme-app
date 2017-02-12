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
  getBlankMemes();


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

  function createMeme(newMeme, id) {
     $http.post(`https://api.imgflip.com/caption_image?template_id=${id}&username=acpbm&password=305238T7K*uI&text0=${newMeme.topText}&text1=${newMeme.bottomMeme}`)
     .then(function(response) {
       console.log(response);
       self.newMeme = {
         name: newMeme.name,
         category: newMeme.category,
         url: response.data.url
        }
       self.memeUrl = response.data.url;
     });
  }

 function showCreateMemeModal(meme){
   console.log('hit modal');
   console.log(meme);
   $("#modal").css("display", "block");

   self.memeUrl = meme.url;
   self.memeName = meme.name;
   self.memeId = meme.id;
 }

 function closeCreateMemeModal(){
   console.log('hit close modal');
   $("#modal").css("display", "none");
 }
 self.closeCreateMemeModal = closeCreateMemeModal;
 self.showCreateMemeModal = showCreateMemeModal;
 self.showCreate = showCreate;
 self.getBlankMemes = getBlankMemes;
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
