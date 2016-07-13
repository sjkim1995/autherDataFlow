'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.post("/auth/me", function(req, res, next){
  console.log(req.body);
  
  // User.findOne(req.body)
  // 	.then(function(user){
  // 	  res.send(user)
  // })

})

module.exports = router;
