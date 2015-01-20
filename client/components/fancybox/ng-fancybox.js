'use strict';

angular.module('fancybox', ['ng'])
  .directive('fancybox', function($compile, $timeout){
    return {
      restrict: 'AC',
      link: function($scope, element) {
        element.fancybox({
          hideOnOverlayClick:false,
          hideOnContentClick:true,
          enableEscapeButton:false,
          showNavArrows:false,
          onComplete: function(){
            $timeout(function(){
              $compile($('#fancybox-content'))($scope); // fancy box id
              $scope.$apply();
              $.fancybox.resize();
            });
          }
        });
      }
    };
});
