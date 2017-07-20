angular.module('video-player')

.directive('search', function() {

  return {
    scope: {
      service: '<',
      result: '<'
    },
    controller: function($scope) {
      // $scope.handleClick = function() {
      //   $scope.service.search($scope.inputText, $scope.result);
      // }

    },
    templateUrl: 'src/templates/search.html'
  };


});

