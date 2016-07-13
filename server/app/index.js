'use strict';

var app = require('express')();
var path = require('path');
var User = require('../api/users/user.model.js');

app.use(require('./logging.middleware'));

app.use(require('./request-state.middleware'));

app.use(require('./session.middleware'));

app.post('/login', function (req, res, next) {
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    console.log('*********', req.body.email, req.body.password);
    if (!user) {
      res.sendStatus(401);
    } else {
      req.session.userId = user.id;
      res.status(201).send(user);
    }
  })
  .catch(next);
});

app.get("/logout", function(req, res, next){
  console.log("route hit")
  console.log(req.session);
  req.session.destroy()
  console.log(req.session);
  res.send("logged out!")
})

// place right after the session setup middleware
app.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});

app.use(require('./statics.middleware'));

app.use('/api', require('../api/api.router'));

app.use('/api', function (req, res, next) {
  if (!req.session.counter) req.session.counter = 0;
  console.log('counter', ++req.session.counter);
  next();
});

var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
});

app.use(require('./error.middleware'));

module.exports = app;
