'use strict';

angular.module('mean.vmiorders').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('vmiorders example page', {
      url: '/vmiorders/example',
      templateUrl: 'vmiorders/views/index.html'
    })
    .state('vmi build order page', {
      url: '/vmiorders/build-order',
      controller: 'BuildOrderCtrl',
      templateUrl: 'vmiorders/views/build.order.html'
    });
  }
]);

