const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
	name: {type: String, required: true},
	date: {type: Date, required: true},
	startTime: {type: Date, required: true},
	endTime: {type: Date, required: true},
	venue: {type: String, required: true},
});

module.exports = mongoose.model('event', eventSchema);