const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  plannedDate: {
    type: Date,
    required: true
  },
  actualDate: {
    type: Date,
    required: true
  },
  progress: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Task', TaskSchema);
