(function (angular) {
  'use strict';

  angular.module('GenteAmiga').component('gaHome', {
    templateUrl: 'app/ga-home/ga-home.component.html',
    controller: HomeController
  });

  HomeController.$inject = [];

  function HomeController() {

  }
})(angular);
