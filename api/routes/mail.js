const express = require('express'),
		  router = express.Router();

const mailController = require('../controllers/mail');

/* Send mail */
router.post('/sendMail', mailController.sendMail);

module.exports = router;