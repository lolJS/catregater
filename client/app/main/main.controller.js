'use strict';

angular.module('catregaterApp')
  .controller('MainCtrl', function ($scope, $http, $state) {
    var url = '';
    $scope.images = [];
    $scope.state = $state.$current.self.name;
    $scope.bricks = {
      busy: false,
      page: 0
    };

    switch ($scope.state) {
      case 'Hot':
        $scope.stateIcon = 'glyphicon glyphicon-fire';
        $scope.message = 'the cutest from ';
        $scope.subreddits = [ 'catpictures',
                              'cats',
                              'catsorgtfo',
                              'catswithbacon',
                              'lolcats',
                              'Pets',
                              'CatGifs',
                              'catvideos',
                              'CatsInSinks',
                              'catscience' ];
        url = '/api/materials';
      break;
      case 'Shuffle':
        $scope.shuffleIcon = 'fa fa-random';
        $scope.message = 'A random assortment of the finest cats reddit has to offer!';
        $scope.stateIcon = 'fa fa-lg fa-random';
        url = '/api/materials/random';
      break;
    }

    $scope.onImgError = function (index) {
      $scope.images.splice(index, 1);
    };

    $scope.bricks.nextPage = function () {
      if ($scope.bricks.busy || $scope.images.length === 0) { return; }
      if ($scope.bricks.page > 9) { return; }

      $scope.bricks.busy = true;

      var lastId = $scope.images[$scope.images.length - 1]._id;

      setTimeout(function () { 
        $http({
          url: '/api/materials',
          method: 'GET',
          params:  { lastId: lastId }
        })
        .success(function(materials) {
          for (var i = 0; i < materials.length; i++) {
            $scope.images.push(materials[i]);
          }
        });
        $scope.bricks.busy = false;
      }, 1000);
      $scope.bricks.page++;
    };

    $http.get(url).success(function(materials) {
      $scope.images = materials;
    });
  });
