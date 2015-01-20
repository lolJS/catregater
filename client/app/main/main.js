'use strict';

angular.module('catregaterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Hot', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('Shuffle', {
      	url: '/random',
      	templateUrl: 'app/main/main.html',
      	controller: 'MainCtrl'
      });
  });