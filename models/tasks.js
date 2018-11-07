const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    state: { type: Boolean, required: true }
}, {timestamps: true})

module.exports = mongoose.model('Task', TaskSchema);