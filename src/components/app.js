angular.module('video-player', [])


.component('app', {
  // TODO

  controller: function() {
    console.log(this);
    this.videoData = window.exampleVideoData;
  },

  templateUrl: 'src/templates/app.html'


});
