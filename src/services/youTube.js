angular.module('video-player')
.service('youTube', function($window, $http){
  // TODO
  this.search = function (query,callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params : {
        type: 'video',
        videoEmbeddable: true,
        q: query,
        maxResults: 5,
        part: 'snippet',
        key: $window.YOUTUBE_API_KEY
      }
    }).then(function({data}) {
      console.log(data.items);
      callback(data.items);
    });
  };
});

//

