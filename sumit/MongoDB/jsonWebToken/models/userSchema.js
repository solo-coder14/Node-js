const mongoose = require('mongoose');

// Function to get current time in UTC+6 (Dhaka)
const getDhakaTime = () => {
    const now = new Date();
    const utcDhakaOffset = 6 * 60; // 6 hours in minutes
    return new Date(now.getTime() + utcDhakaOffset * 60000);
};

const userSchema = mongoose.Schema({
    email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
    username: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'] },
    date: { type: Date, default: getDhakaTime },
    todos:[
      {
        type: mongoose.Types.ObjectId, ref: "Todo"
      }
    ]
});

module.exports = userSchema;

