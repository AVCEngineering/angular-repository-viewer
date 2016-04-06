(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }
})();
