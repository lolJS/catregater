'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MaterialSchema = new Schema({
  url: { type: String, index: { unique: true, dropDups: true } },
  subreddit: String,
  title: String,
  thumb: String,
  permalink: String,
  views: Number,
  upvotes: Number,
  rk0: Number,
  rk1: Number
});

module.exports = mongoose.model('Material', MaterialSchema);
