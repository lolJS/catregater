'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            80,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/catregater'
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