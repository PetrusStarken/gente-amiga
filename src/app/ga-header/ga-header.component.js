(function (angular) {
  'use strict';

  angular.module('GenteAmiga').component('gaHeader', {
    templateUrl: 'app/ga-header/ga-header.component.html',
    controller: HeaderController
  });

  /** @ngInject */
  function HeaderController() {
    var vm = this;

    vm.toggleMenu = toggleMenu;

    function toggleMenu(active) {
      vm.menuActive = !active;
    }
  }
})(angular);
