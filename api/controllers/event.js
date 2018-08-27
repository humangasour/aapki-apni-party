const mongoose = require('mongoose');

const Event = require('../models/event');

exports.postEvent = (req, res, next) => {
	const event = new Event({
		name: req.body.name,
		date: req.body.date,
		startTime: req.body.startTime,
		endTime: req.body.endTime,
		venue: req.body.venue,
	});

	event.save()
		.then(docs => {
			res.status(200).json(docs);	
		})
		.catch(error => {
			res.status(500).json(error);
		})
}

exports.getEvents = (req, res, next) => {
	Event.find({}, function(err, events){
     if(err){
         console.log("ERROR!");
     } else {
         res.send(events);
     }
  });
}
