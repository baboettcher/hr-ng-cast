angular.module('video-player')


.directive('app', function() {

  return {
    scope: {},
    controller: function($scope, youTube) {
      $scope.videos = window.exampleVideoData;
      $scope.currentVideo = window.exampleVideoData[0];
      $scope.selectVideo = function(clickedVideo) {
        $scope.currentVideo = clickedVideo;
      };

      console.log(youTube);
      $scope.searchService = youTube; //

      $scope.searchResults = function(dataArr) {
        $scope.videos = dataArr; // update videolist
        $scope.currentVideo = dataArr[0]; // update video-player
      };


      $scope.searchService.search('wonderful world louis armstrong', $scope.searchResults);
    },



    templateUrl: 'src/templates/app.html'





  };


});

// youTube is in global scope
// pass it in controller (?)

// app.js -> app.html
//  -> scope: videoList.js -> videoList.html
//            -> scope: videoListEntry.js -> videoListEntry.html
