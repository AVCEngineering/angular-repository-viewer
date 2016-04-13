(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .controller('RepositoryController', RepositoryController);

  /** @ngInject */
  function RepositoryController(Repository, $routeParams) {
    var vm = this;

    vm.userName = $routeParams.name;
    vm.repoName = $routeParams.repo;
    vm.repo = {};
    vm.error = false;

    Repository.get({ name: vm.userName, repo: vm.repoName }, _loadRepoSuccess, _loadRepoError);

    function _loadRepoSuccess(data) {
      vm.repo = data;
      vm.error = false;
    }

    function _loadRepoError(error) {
      vm.error = error;
    }
  }

})();
