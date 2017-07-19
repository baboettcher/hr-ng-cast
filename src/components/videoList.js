angular.module('video-player')

.directive('videoList', function() {

  return {
    scope: {
      videos: '<',
      onClick: '<'
    },
    controller: function ($scope) {

    },
    templateUrl: 'src/templates/videoList.html'
  };


});
