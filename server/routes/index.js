var express = require('express');
var router = express.Router();
var Bug = require('../models/bugs');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// get all bugs
router.get('/bugs',function(res,req,next){
  Bug.find(function(err,data){
    if(err){
      res.json({
        'message':err
      });
    } else {
      res.json(data);
    }
  });
});
// POST request for create a new bug
router.post('/bugs',function(res,req,next){
  newBug = new Bug({
    name: req.body.name,
    age: req.body.age
  });
  newBug.save(function(err,data){
    if(err){
      res.json({
        'message':err
      });
    } else {
      res.json(data);
    }
  });
});



module.exports = router;
