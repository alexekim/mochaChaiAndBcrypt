var express = require('express');
var controller = express.Router();
var UserAccount = require('../models/UserAccount');

/* GET users listing. */
controller.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

controller.get('/logout', function(req, res, next){
  res.json({ 'message': 'logout not yet implemented'});
})

controller.post('/register', function(req, res, next){
  res.json({ 'message': 'register not yet implemented'});

})

controller.post('/login', function(req, res, next){
  res.json({ 'message': 'login not yet implemented'});
})


module.exports = controller;
