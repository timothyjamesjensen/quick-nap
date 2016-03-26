angular.module('nappy')
  .service('AlarmService', [
    function() {
      return {
        play: function() {
          alert("hello");
        }
      };
    }
]);
