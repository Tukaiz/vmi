'use strict';

angular.module('mean.vmiorders').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('vmiorders example page', {
      url: '/vmiorders/example',
      templateUrl: 'vmiorders/views/index.html'
    });
  }
]);
