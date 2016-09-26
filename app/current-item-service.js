(function () {
  angular
    .module('gearApp')
    .service('currentItemService', function () {
      var item;

      return {
        getItem: function () {
          return item;
        },

        setItem: function (newItem) {
          item = newItem;
        }
      }
    });

})();
