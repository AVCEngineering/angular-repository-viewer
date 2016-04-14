(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .directive('repositoryItem', repositoryItem);

  /** @ngInject */
  function repositoryItem() {
    return {
      restrict: 'E',
      scope: {
        repo: '='
      },
      controller: RepositoryController,
      controllerAs: 'Repository',
      templateUrl: 'app/components/repository-item/repository-item.html'
    };
  }

  /** @ngInject */
  function RepositoryController($location) {
    var vm = this;

    vm.viewRepo = viewRepo;

    function viewRepo(userName, repo) {
      $location.path('/' + userName + '/repositories/' + repo);
    }
  }

})();
