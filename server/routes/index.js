var express = require('express');
var router = express.Router();
var Bug = require('../models.js/bugs');
var mongoose = require('mongoose');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// get all bugs
router.get('/bugs', function(req, res, next) {
  Bug.find(function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
// get single bug
router.get('/bug/:id', function(req, res, next) {
  Bug.findById(req.params.id,function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
// POST request for create a new bug
router.post('/bugs', function(req, res, next) {
  newBug = new Bug({
    name: req.body.name,
    age: req.body.age
  });
  newBug.save(function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
// put for single bug
router.put('/bug/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    age: req.body.age
  };
  Bug.findByIdAndUpdate(req.params.id, update,function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});

// DELETE request for single bug
router.put('/bug/:id', function(req, res, next) {
  Bug.findByIdAndRemove(req.params.id,function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
