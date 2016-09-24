(function (angular) {
  'use strict';

  function BackpackController(currentItemService) {
    this.items = [];

    this.setItem = function (item) {
      currentItemService.setItem(item);
    }
  }

  angular
    .module('gearApp')
    .component('backpack', {
      templateUrl: 'backpack/backpack.template.html',
      controller: BackpackController
    });

})(window.angular);
