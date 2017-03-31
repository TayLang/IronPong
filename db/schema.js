const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})

module.exports = {
  User: mongoose.model('User', usersSchema)
  
}
