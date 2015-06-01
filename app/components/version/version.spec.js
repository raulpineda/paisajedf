/* global describe, it, expect, beforeEach, afterEach, module, inject */
'use strict';

define(['app', 'angularMocks'], function(app) {
	describe('paisajeDf.version module', function() {
		beforeEach(module('paisajeDf.version'));

		describe('version service', function() {
			it('should return current version', inject(function(version) {
				expect(version).toEqual('0.1');
			}));
		});
	});
});