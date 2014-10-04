'use strict';

/**
 * @ngdoc overview
 * @name wrongmoveApp
 * @description
 * # wrongmoveApp
 *
 * Main module of the application.
 */
angular
  .module('wrongmoveApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
