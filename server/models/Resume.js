const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  fullName: String,
  photoUrl: String,
  age: Number,
  education: String,
  graduationYear: Number,
  experience: String,
  skills: String,
  hobbies: String,
  contacts: String,
  email: String
});

module.exports = mongoose.model('Resume', resumeSchema);
