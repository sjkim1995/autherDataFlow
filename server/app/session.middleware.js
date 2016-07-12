
var session = require('express-session');
var router = require('express').Router();

router.use(session({
  // this mandatory configuration ensures that session IDs are not predictable
  secret: 'tongiscool' 
}));

module.exports = router;