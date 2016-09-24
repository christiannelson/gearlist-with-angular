(function (angular) {
  'use strict';

  function ItemDetailsController($scope, currentItemService) {
    $scope.$watch(function () {
      return currentItemService.getItem();
    }, function (new_val) {
      $scope.item = new_val;
    });
  }

  angular
    .module('gearApp')
    .component('itemDetails', {
      templateUrl: 'item-details/item-details.template.html',
      controller: ItemDetailsController
    });

})(window.angular);
