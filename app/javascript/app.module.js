(function () {
  'use strict';

  // debugger

  angular.module('gearApp', ['templates'])
    .controller('KitController', function ($scope) {
      this.itemSelected = function (item) {
        this.selectedItem = item;
      }
    })
})();
