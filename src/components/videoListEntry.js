angular.module('video-player')

.directive('videoListEntry', function() {

  return {
    scope: {
      video: '<',
      onClick: '<'
    },
    controller: function($scope) {
      $scope.hello = function() {
        console.log('hello');
      };
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };


});