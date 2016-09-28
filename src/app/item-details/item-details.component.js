(function () {
  function ItemDetailsController() {
  }

  angular
    .module('gearApp')
    .component('itemDetails', {
      templateUrl: 'item-details/item-details.template.html',
      controller: ItemDetailsController,
      bindings: {
        selectedItem: '<'
      }
    });
})();
