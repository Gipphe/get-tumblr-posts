'use strict';
const cheerio = require('cheerio');
const rp = require('request-promise');
const isArray = require('is-array');
const isRegex = require('is-regex');

module.exports = function(_blogUrl, _types, _pattern) {
	let blogUrl = '';
	let types = [];
	let pattern = new RegExp('');

	if (typeof _blogUrl === 'undefined') {
		throw new Error('blogUrl is undefined');
	}
	blogUrl = _blogUrl;
	if (_blogUrl.charAt(blogUrl.length - 1) !== '/') {
		blogUrl += '/';
	}
	blogUrl += 'archive';

	if (typeof _types === 'string') {
		types = [_types];
	}
	if (isArray(_types)) {
		types = _types;
	}
	if (isRegex(_pattern)) {
		pattern = _pattern;
	}

	console.log(blogUrl);

	return rp(blogUrl)
		.then(function(html) {
			const $ = cheerio.load(html);
			const typesColl = {
				photo: 'is_photo',
				text: 'is_regular',
				video: 'is_video'
			};
			let posts = $('section.posts.loading')
				.children('div.post');

			if (types) {
				let filterClasses = '';
				for (let i = 0, len = types.length; i < len; i += 1) {
					const type = types[i];
					if (!typesColl[type]) {
						throw new Error(type + ' is not a valid class type');
					}

					if (filterClasses.length !== 0) {
						filterClasses += ',';
					}
					filterClasses += typesColl[type];
				}
				posts = posts.filter(filterClasses);
			}

			console.log(posts.length);

		})
		.catch(function(err) {
			throw new Error(err);
		});
};
