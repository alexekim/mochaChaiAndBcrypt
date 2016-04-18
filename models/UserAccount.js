var mongoose = require('mongoose');

var UserAccountSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordHash: String,
  birthDate: String
});

// model, schema
module.exports = mongoose.model('UserAccount', UserAccountSchema);
