// models/task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: true
  },
  completada: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
