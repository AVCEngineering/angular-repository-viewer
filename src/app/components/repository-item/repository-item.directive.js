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
      templateUrl: 'app/components/repository-item/repository-item.html'
    };
  }

})();
