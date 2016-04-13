(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .factory('Repository', repository);

  /** @ngInject */
  function repository($resource, githubBaseUrl) {
    return $resource(githubBaseUrl + 'repos/:name/:repo', {}, {
      query: { url: githubBaseUrl + 'users/:name/repos', isArray: true }
    });
  }
})();
