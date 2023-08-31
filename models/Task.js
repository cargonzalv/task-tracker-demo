const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    details: String
}, { timestamps: true});

module.exports = mongoose.model('Task', TaskSchema);