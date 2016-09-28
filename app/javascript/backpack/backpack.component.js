(function () {
  function BackpackController() {
    this.items = [{
      name: 'K9 Knit Hat',
      category: 'Warm Hat',
      weight: 3.8
    }];

    this.totalWeight = function () {
      return this.items.map(function (a) {
        return a.weight;
      }).reduce(function (a, b) {
        return a + b;
      }, 0);
    };
  }

  angular
    .module('gearApp')
    .component('backpack', {
      templateUrl: 'backpack/backpack.template.html',
      controller: BackpackController,
      bindings: {
        'onItemSelected': '&'
      }
    });
})();
