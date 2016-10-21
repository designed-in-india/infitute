angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('app.login', {
      url: 'login',
      component: 'login'
    })
    .state('app.landing', {
      url: 'landing',
      component: 'landing'
    })
    .state('app.videos', {
      url: 'videos',
      component: 'videos'
    });
}
