(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($scope, $location, $routeParams, User) {
    $scope.name = $routeParams.name || 'AVCEngineering';
    $scope.user = {};
    $scope.lookupUser = lookupUser;
    $scope.notFound = false;

    function lookupUser(name) {
      if (_shouldReloadRoute(name, $scope.user, $scope.notFound)) {
        $location.path('/' + name);
      } else {
        User.get({ name: name }, _lookupUserSuccess, _lookupUserError);
      }
    }

    function _lookupUserSuccess(data) {
      $scope.user = data;
      $scope.notFound = false;
    }

    function _lookupUserError() {
      $scope.user = {};
      $scope.notFound = true;
    }

    function _shouldReloadRoute(name, user, notFound) {
      return (user.login || notFound) && name.toLowerCase().trim() !== user.login;
    }

    $scope.lookupUser($scope.name);
  }
})();
