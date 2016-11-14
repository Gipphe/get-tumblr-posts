/* globals describe:false, it:false, before:false, beforeEach:false, after:false, afterEach:false */
'use strict';
const assert = require('better-assert');
const mockery = require('mockery');
const fn = require('./');

describe('get-tumblr-posts', function() {
	var posts = [
		'foo',
		'bar',
		'baz',
		'quux'
	];

	before(function() {
		mockery.enable();

	});
	it('return an array with links to all posts', function() {
		assert(fn('https://foo.bar/').length === '4');
	});
});
