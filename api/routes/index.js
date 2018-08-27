const express = require('express'),
		  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET article page. */
router.get('/article', function(req, res, next) {
  res.render('article', { title: 'Express' });
});

/* GET article page. */
router.get('/articles', function(req, res, next) {
  res.render('articles', { title: 'Express' });
});




module.exports = router;
