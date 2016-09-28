(function () {

  function ClosetService() {
    this.items = [
      {
        name: 'Osprey Exos 38',
        category: 'Backpack',
        weight: 34.2
      }, {
        name: "Arc'teryz Altra 65",
        category: 'Backpack',
        weight: 80.9
      }, {
        name: 'Big Agnes Mystic 15°',
        category: 'Sleeping Bag',
        weight: 37.0
      }, {
        name: 'Enlightened Quilt 20°',
        category: 'Sleeping Bag',
        weight: 18.5
      }, {
        name: 'Thermarest Neoair Xlite',
        category: 'Sleeping Pad',
        weight: 12.2
      }, {
        name: 'Big Agnes Q-Core SLX',
        category: 'Sleeping Pad',
        weight: 16.1
      }, {
        name: 'Gossomer Polycryo',
        category: 'Ground Cloth',
        weight: 1.4
      }, {
        name: "Painter's Plastic",
        category: 'Ground Cloth',
        weight: 7.5
      }, {
        name: 'Jetboil Lite',
        category: 'Stove',
        weight: 9.9
      }, {
        name: 'Snow Peak GigaPower Ti',
        category: 'Stove',
        weight: 3.1
      }, {
        name: 'MSR Ti 1.5L',
        category: 'Cookware',
        weight: 6.3
      }, {
        name: 'Snow Peak 450 Ti',
        category: 'Cup',
        weight: 2.1
      }, {
        name: 'Swiss Army Huntsman',
        category: 'Knife',
        weight: 3.2
      }, {
        name: 'Petzl Tikka XP2',
        category: 'Light',
        weight: 2.8
      }, {
        name: 'Black Diamond Ion',
        category: 'Light',
        weight: 1.9
      }, {
        name: 'Custom',
        category: 'First Aid',
        weight: 3.5
      }, {
        name: 'Nalgene 1L',
        category: 'Canteen',
        weight: 3.9
      }, {
        name: 'Hydrapak 1.5L',
        category: 'Canteen',
        weight: 3.9
      }, {
        name: 'Bear Vault 500',
        category: 'Food Storage',
        weight: 41.0
      }, {
        name: 'Ursack',
        category: 'Food Storage',
        weight: 8.9
      }, {
        name: 'U-Dig-It',
        category: 'Shovel',
        weight: 4.9
      }, {
        name: 'Deuce of Spades',
        category: 'Shovel',
        weight: 0.6
      }
    ]
  }

  angular
    .module('gearApp')
    .service('closetService', ClosetService);

})();
