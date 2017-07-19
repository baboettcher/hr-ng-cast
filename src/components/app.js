angular.module('video-player', [])


.directive('app', function() {

  return {
    scope: {},
    controller: function($scope) {
      $scope.videos = window.exampleVideoData;
      $scope.currentVideo = window.exampleVideoData[0];
      $scope.selectVideo = function(clickedVideo) {
        $scope.currentVideo = clickedVideo;
      };
      $scope.searchResults = function() {

      };
    },

    templateUrl: 'src/templates/app.html'


  };


});

// app.js -> app.html
//  -> scope: videoList.js -> videoList.html
//            -> scope: videoListEntry.js -> videoListEntry.html
