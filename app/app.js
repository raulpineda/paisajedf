'use strict';

define([
	'angular',
	'angularRoute',
	'home/home',
	'login/login'
], function(angular, angularRoute, home, login) {
	// Declare app level module which depends on views, and components
	return angular.module('paisajeDf', [
		'ngRoute',
		'paisajeDf.home',
		'paisajeDf.login'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/home'});
	}]);
});

