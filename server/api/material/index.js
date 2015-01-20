'use strict';

var express = require('express');
var controller = require('./material.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/random', controller.random);
//  We don't want to expose these for our cat app
//router.post('/', controller.create);
//router.get('/:id', controller.show); 
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);

module.exports = router;