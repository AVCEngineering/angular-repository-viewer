(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .factory('User', user);

  /** @ngInject */
  function user($resource, githubBaseUrl) {
    return $resource(githubBaseUrl + 'users/:name');
  }
})();
