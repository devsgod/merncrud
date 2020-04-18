var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
  first_name: String,
  second_name: String,
  gender: String,
  description: String,
  age: Number,
  job: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Person', PersonSchema);
