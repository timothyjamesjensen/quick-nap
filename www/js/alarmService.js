angular.module('nappy')
  .service('AlarmService', [
    function() {
      this.play = function() {
        alert("hello");
      }
    }
]);
