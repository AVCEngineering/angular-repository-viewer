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
      .when('/:name/repositories', {
        templateUrl: 'app/repositories/repositories.html',
        controller: 'RepositoriesController',
        controllerAs: 'Repos'
      })
      .when('/:name/repositories/:repo', {
        templateUrl: 'app/repository/repository.html',
        controller: 'RepositoryController',
        controllerAs: 'Repo'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }

})();
