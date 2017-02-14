angular.module('memeApp', ['ui.router'])
.config(MemeRouter);

function MemeRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: '/partials/home.html',
    controller: 'RandomMemeController as rand'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: '/partials/signup.html',
    controller: 'AuthController as auth'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/partials/login.html',
    controller: 'AuthController as auth'
  })
  .state('user', {
    url: '/user',
    templateUrl: '/partials/user.html',
    controller: 'MemeController as meme',
    params: {userId: null}
  })
  .state('createMeme', {
    url: '/user/:id/meme',
    templateUrl:'/partials/createMeme.html',
    controller: 'MemeController as meme'
  })
}
