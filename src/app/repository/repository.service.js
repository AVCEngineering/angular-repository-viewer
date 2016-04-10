(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .factory('Repository', repository);

  /** @ngInject */
  function repository($resource) {
    return $resource('https://api.github.com/users/:name/repos', {}, {
      get: { isArray: true }
    });
  }
})();
