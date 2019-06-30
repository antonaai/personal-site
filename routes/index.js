var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/en')
});

router.get('/en', function (req, res, next) {
  res.render('index');
})

router.get('/it', function (req, res, next) {
  res.render('index-it');
})

module.exports = router;
