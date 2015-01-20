'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/catregater-dev'
  },
  endPoints: [
  	{
  		name: 'reddit',
  		url: 'http://reddit.com/r/',
  		subreddits: [
        'catpictures',
        'cats',
        'catsorgtfo',
        'catswithbacon',
        'lolcats',
        'Pets',
        'CatGifs',
        'catvideos',
        'CatsInSinks',
        'catscience'
  		],
  		sort: 'hot'
  	}
  ]
};
