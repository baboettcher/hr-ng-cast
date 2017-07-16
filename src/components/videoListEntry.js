angular.module('video-player')

// 'video' defined in local scope the type is one-way '<'
.directive('videoListEntry', function(){
  return {
    scope: {
      video: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
}

});