const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
  companyName: String,
  companyLogoUrl: String,
  position: String,
  requirements: String,
  responsibilities: String,
  salary: String,
  contacts: String,
  email: String
});

module.exports = mongoose.model('Vacancy', vacancySchema);
