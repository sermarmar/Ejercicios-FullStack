var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// http://localhost:3000/info
router.get('/info', function(req, res, next) {
  res.send('Has entrado en las informaciones (http://localhost:3000/info)');
});

// http://localhost:3000/contact
router.get('/contact', function(req, res, next) {
  res.send('Has entrado en los contactos (http://localhost:3000/contact)');
});

// http://localhost:3000/about
router.get('/about', function(req, res, next) {
  res.send('Has entrado en "Acerca de" (http://localhost:3000/about)');
});

module.exports = router;
