(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($location, $routeParams, User) {
    var vm = this;

    vm.name = $routeParams.name || 'AVCEngineering';
    vm.user = {};
    vm.lookupUser = lookupUser;
    vm.viewRepos = viewRepos;
    vm.notFound = false;

    function lookupUser(name) {
      if (_shouldReloadRoute(name, vm.user, vm.notFound)) {
        $location.path('/' + name);
      } else {
        User.get({ name: name }, _lookupUserSuccess, _lookupUserError);
      }
    }

    function viewRepos(name) {
      $location.path('/' + name + '/repositories');
    }

    function _lookupUserSuccess(data) {
      vm.user = data;
      vm.notFound = false;
    }

    function _lookupUserError() {
      vm.user = {};
      vm.notFound = true;
    }

    function _shouldReloadRoute(name, user, notFound) {
      return (user.login || notFound) && name.toLowerCase().trim() !== user.login;
    }

    vm.lookupUser(vm.name);
  }
})();
