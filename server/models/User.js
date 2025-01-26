// server/models/User.js
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure unique email
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
