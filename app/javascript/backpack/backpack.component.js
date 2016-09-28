(function () {
  function BackpackController() {
    this.items = [];
  }

  angular
    .module('gearApp')
    .component('backpack', {
      templateUrl: 'backpack/backpack.template.html',
      controller: BackpackController
    });
})();
