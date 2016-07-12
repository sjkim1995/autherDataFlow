'use strict';

var router = require('express').Router();

router.use(function (req, res, next) {
  var bodyString = '';
  req.on('data', function (chunk) {
    bodyString += chunk;
  });
  req.on('end', function () {
    bodyString = bodyString || '{}';
    req.body = eval('(' + bodyString + ')');
    next();
  });
});

// router.post("/login", function (req, res, next) {
//   var ema
// })

module.exports = router;


