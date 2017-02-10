angular.module('memeApp', ['ui.router'])
.config(MemeRouter);

function MemeRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: '/partials/home.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: '/partials/signup.html',
    controller: 'AuthController as auth'
  })
}
