'use strict';

define(['angular', 'components/version/version-directive', 'components/version/interpolate-filter'],
	function(angular, versionDirective, interpolateFilter) {
		angular.module('paisajeDf.version', [
		  'paisajeDf.version.interpolate-filter',
		  'paisajeDf.version.version-directive'
		])
		.value('version', '0.1');
});