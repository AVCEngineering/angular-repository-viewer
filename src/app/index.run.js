(function() {
  'use strict';

  angular
    .module('angularRepositoryViewer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
