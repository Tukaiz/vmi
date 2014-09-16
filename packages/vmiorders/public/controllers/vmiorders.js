'use strict';

angular.module('mean.vmiorders').controller('VmiordersController', ['$scope', 'Global', 'Vmiorders',
  function($scope, Global, Vmiorders) {
    $scope.global = Global;
    $scope.package = {
      name: 'vmiorders'
    };
  }
]);
