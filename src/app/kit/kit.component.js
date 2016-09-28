(function () {
  function KitController() {
    this.itemSelected = function (item) {
      this.selectedItem = item;
    }
  }

  angular
    .module('gearApp')
    .component('kit', {
      templateUrl: 'kit/kit.template.html',
      controller: KitController
    });
})();
