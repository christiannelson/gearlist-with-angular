(function (angular) {
  'use strict';

  angular.module('myApp').component('closet', {
    templateUrl: 'components/closet/closet.html',
    controller: function ClosetController() {
      this.items = [
        {
          name: 'Osprey Exos 38',
          weight: 34.2
        }, {
          name: 'Big Agnes Mystic 15°',
          weight: 37.0
        }, {
          name: 'Thermarest Neoair Xlite',
          weight: 12.2
        }
      ]
    }
  });
})(window.angular);
