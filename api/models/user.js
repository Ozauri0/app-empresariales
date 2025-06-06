const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Luego se puede hashear
  name:     { type: String, required: true },
  role:     { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' },
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);