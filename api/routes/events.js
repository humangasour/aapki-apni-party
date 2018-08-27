const express = require('express'),
		  router = express.Router();

const eventController = require('../controllers/event');

router.get('/events', eventController.getEvents);
router.post('/event', eventController.postEvent);

module.exports = router;