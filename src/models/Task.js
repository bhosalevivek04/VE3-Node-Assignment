const mongoose = require('mongoose');

// Define the schema for tasks
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
});

// Export the Task model
module.exports = mongoose.model('Task', taskSchema);