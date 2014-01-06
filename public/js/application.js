angular.module('firechat', ['ngRoute', 'firebase'])

  .value('fbURL', 'https://tanuku.firebaseio.com/')

  .factory('Projects', function($firebase, fbURL) {
    return $firebase(new Firebase(fbURL));
  })

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller:'ListCtrl',
        templateUrl:'partials/list.html'
      })
      .when('/edit/:projectId', {
        controller:'EditCtrl',
        templateUrl:'partials/detail.html'
      })
      .when('/new', {
        controller:'CreateCtrl',
        templateUrl:'partials/detail.html'
      })
      .otherwise({
        redirectTo:'/'
      });
  });