'use strict';

/**
 * @ngdoc function
 * @name datavizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the datavizApp
 */
angular.module('datavizApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
