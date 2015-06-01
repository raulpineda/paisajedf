'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('paisajeDf.home', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'home/home.html',
			controller: 'HomeController'
		});
	}])
	.controller('HomeController', ['$scope', function($scope) {
		$scope.tralala = 'Hola, mundo';
	}]);
});

