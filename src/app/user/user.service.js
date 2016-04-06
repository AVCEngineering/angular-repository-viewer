(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .factory('User', user);

  /** @ngInject */
  function user($resource) {
    return $resource('https://api.github.com/users/:name');
  }
})();
