(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .controller('RepositoriesController', RepositoriesController);

    /** @ngInject */
    function RepositoriesController(Repository, $routeParams) {
      var vm = this;

      vm.userName = $routeParams.name;
      vm.error = false;
      vm.repos = [];
      
      function _loadReposSuccess(data) {
        vm.error = false;
        vm.repos = data.sort(function(a, b) {
          return b - a;
        });
      }

      function _loadReposError(error) {
        vm.error = error;
      }

      Repository.get({ name: vm.userName }, _loadReposSuccess, _loadReposError);
    }
})();
