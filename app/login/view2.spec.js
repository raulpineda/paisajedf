/*global module, inject */
'use strict';

define(['app', 'angularMocks'], function(app) {
	describe('paisajeDf.login module', function() {

		beforeEach(module('paisajeDf.login'));

		describe('login controller', function(){

			it('should ....', inject(function($controller) {
			//spec body
			var view2Ctrl = $controller('LoginController', { $scope: {} });
			expect(view2Ctrl).toBeDefined();
		}));

		});
	});
});