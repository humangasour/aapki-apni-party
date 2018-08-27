const express = require('express'),
		  router = express.Router();

const articleController = require('../controllers/article');

router.get('/articles', articleController.getArticles);
router.post('/article', articleController.postArticle);

module.exports = router;