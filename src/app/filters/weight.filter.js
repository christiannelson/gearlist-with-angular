(function () {
  function WeightFilter() {
    return function (value) {
      var pounds = Math.floor(value / 16.0).toFixed(0);
      var ounces = (value % 16.0).toFixed(1);

      return pounds + ' lbs ' + ounces + ' oz';
    };
  }

  angular
    .module('gearApp')
    .filter('weight', WeightFilter);
})();
