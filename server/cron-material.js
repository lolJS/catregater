/**
 * Get fap material via node-cron
 */

'use strict';

var request = require('request');
var cron = require('cron').CronJob;
var Material = require('./api/material/material.model');
var config = require('./config/environment');
var util = require('util');

var job = new cron('0 */3 * * *', function () { // Get new cats every 3 hours
	console.log('Aggregating cats from all corners of reddit.');
	for (var i = config.endPoints.length; i--;) {
		var api = config.endPoints[i];

		if (api.name === 'reddit') {
			for (var k = api.subreddits.length; k--;) {
				var subreddit = api.subreddits[k];
				digestRedditPosts(api.url + subreddit + '/hot.json');
			}
		}
	}
	}, function () { // on job end
		console.log('I can haz cheezeburger!');
	},
	true // run job immediately
);

function digestRedditPosts(url) {
	console.log("Getting cats from: " + url);
	request(url, function (error, response, json) {

		if (error)
			console.log("ERROR: " + error);

		if (!error && response.statusCode === 200) {
			json = JSON.parse(json);
			var posts = json.data.children;
			for (var j = posts.length; j--;) {
				var img = posts[j].data;

				createMaterial(img);
			}
		}
	});
}

function createMaterial(img) {
	img.url = img.url.replace(/^https:\/\//i, 'http://'); // prevent images not loading because of CORS

	if (img.url.match('\/a/') && img.media !== undefined && img.media.oembed !== undefined && img.domain !== 'tumblr.com') {
		Material.create({
			url: img.url,
			subreddit: img.subreddit,
		  title: img.title,
		  thumb: img.media.oembed.thumbnail_url.replace(/^https:\/\//i, 'http://'),
		  views: 0,
		  upvotes: img.ups,
		  permalink: img.permalink,
		  rk0: Math.random(),
		  rk1: Math.random()
		});
	}
	else {
		Material.create({
			url: img.url,
			subreddit: img.subreddit,
		  title: img.title,
		  thumb: (img.url.split('.').length < 3) ? img.url + ".jpg" : img.url,
		  views: 0,
		  upvotes: img.ups,
		  permalink: img.permalink,
		  rk0: Math.random(),
		  rk1: Math.random()
		});
	}
}
