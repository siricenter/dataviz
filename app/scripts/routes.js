'use strict';
/**
 * @ngdoc overview
 * @name datavizApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('datavizApp')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })

      .when('/circle', {
        templateUrl: 'views/circle.html',
        conroller: 'MainCtrl'
      })

      .when('/bubble', {
        templateUrl: 'views/bubble.html',
        controller: 'MainCtrl'
      })

      .when('/motion', {
        templateUrl: 'views/motion.html',
        controller: 'MainCtrl'
      })

      .otherwise({redirectTo: '/'});
  }]);
