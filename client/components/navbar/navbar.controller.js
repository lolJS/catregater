'use strict';

angular.module('catregaterApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Hot',
      'link': '/',
      'class': 'hot',
      'iconClass': 'glyphicon glyphicon-large glyphicon-fire'
    },
    {
      'title': 'Shuffle',
      'link': '/random',
      'class': 'random',
      'iconClass': 'fa fa-lg fa-random'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
  