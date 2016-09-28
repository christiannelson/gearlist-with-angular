(function () {
  function ClosetController(closetService) {
    this.items = closetService.items
  }

  angular
    .module('gearApp')
    .component('closet', {
      templateUrl: 'closet/closet.template.html',
      controller: ClosetController,
      bindings: {
        'onItemSelected': '&'
      }
    });

})();
