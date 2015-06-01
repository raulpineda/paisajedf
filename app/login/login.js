'use strict';

define([
	'angular',
	'angularRoute',
	'components/version/version'
], function(angular) {
	angular.module('paisajeDf.login', ['ngRoute', 'paisajeDf.version'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/login', {
			templateUrl: 'login/login.html',
			controller: 'LoginController'
		});
	}])
	// We can load the controller only when needed from an external file
	.controller('LoginController', ['$scope', '$injector', function($scope, $injector) {
		require(['login/loginController'], function(loginController) {
			// injector method takes an array of modules as the first argument
			// if you want your controller to be able to use components from
			// any of your other modules, make sure you include it together with 'ng'
			// Furthermore we need to pass on the $scope as it's unique to this controller
			$injector.invoke(loginController, this, {'$scope': $scope});
		});
	}]);
});