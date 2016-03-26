var alarmService = angular.module('nappy');

alarmService.factory('AlarmService', ['scope', '$cordovaNativeAudio', '$timeout',
  function($scope, $cordovaNativeAudio, $timeout) {
    $cordovaNativeAudio
      .preloadSimple('click', 'audio/click.mp3')
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        alert(error);
      });

    $cordovaNativeAudio
      .preloadComplex('music', 'audio/music.mp3', 1, 1)
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
      });

    $scope.play = function () {
      $cordovaNativeAudio.play('click');
      $cordovaNativeAudio.loop('music');

      // stop 'music' loop and unload
      $timeout(function () {
        $cordovaNativeAudio.stop('music');

        $cordovaNativeAudio.unload('click');
        $cordovaNativeAudio.unload('music');
      }, 1000 * 60);
    };
  }
]);
