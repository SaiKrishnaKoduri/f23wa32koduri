var express = require('express');
var router = express.Router();

/* GET Interesting fact. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sai Krishna Koduri' });
});

module.exports = router;
