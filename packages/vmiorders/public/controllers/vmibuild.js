'use strict';

angular.module('mean.vmiorders').controller('BuildOrderCtrl', ['$scope', 'Global', 'Vmiorders',
  function($scope, Global, Vmiorders) {
    $scope.global = Global;
    $scope.package = {
      name: 'Balls'
    };
  }
]);
