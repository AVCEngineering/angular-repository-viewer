(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .controller('RepositoriesController', RepositoriesController);

    /** @ngInject */
    function RepositoriesController(Repository, $routeParams) {
      var vm = this;

      vm.userName = $routeParams.name;
      vm.repos = [];
      vm.error = false;

      Repository.query({ name: vm.userName }, _loadReposSuccess, _loadReposError);

      function _loadReposSuccess(data) {
        vm.error = false;
        vm.repos = data.sort(function(a, b) {
          return b.stargazers_count - a.stargazers_count;
        });
      }

      function _loadReposError(error) {
        vm.error = error;
      }
    }
})();
