'use strict';

angular.module('imgerror', ['ng'])
  .directive('imgerror', function() {
    return {
      restrict: 'A',
      scope: {
      	imgerror: '='
      },
      link: function(scope, elem) {
      	elem.bind('error', function () {
      		scope.$apply(scope.imgerror(scope.$parent.$index));
      	});
      }
    };
  });
