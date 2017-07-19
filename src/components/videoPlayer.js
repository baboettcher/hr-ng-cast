angular.module('video-player')

.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}])

.directive('videoPlayer', function() {

  return {

    scope: {
      video: '<'
    },

    templateUrl: 'src/templates/videoPlayer.html'
  }


});
