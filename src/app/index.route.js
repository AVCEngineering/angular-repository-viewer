(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/:name?', {
        templateUrl: 'app/user/user.html',
        controller: 'UserController',
        controllerAs: 'User'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }

})();
