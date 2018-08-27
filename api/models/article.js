const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
	title: {type: String, required: true},
	author: {type: String, required: true},
	date: {type: Date, required: true},
	body: {type: String, required: true},
});

module.exports = mongoose.model('article', articleSchema);