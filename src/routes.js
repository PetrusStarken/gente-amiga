(function (angular) {
  'use strict';

  angular.module('GenteAmiga').config(RoutesConfig);

  /** @ngInject */
  function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component: 'gaHome'
      });
  }
})(angular);
