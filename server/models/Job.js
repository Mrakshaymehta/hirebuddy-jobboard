const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  tags: [String],
  link: String,
  type: String
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job; // ❗ correct!