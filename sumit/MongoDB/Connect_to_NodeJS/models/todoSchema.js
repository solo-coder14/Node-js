const mongoose = require('mongoose');

// Function to get current time in UTC+6 (Dhaka)
const getDhakaTime = () => {
    const now = new Date();
    const utcDhakaOffset = 6 * 60; // 6 hours in minutes
    return new Date(now.getTime() + utcDhakaOffset * 60000);
};

const todoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    status: { type: String, enum: ['active', 'inactive'] },
    date: { type: Date, default: getDhakaTime },
});

module.exports = todoSchema;

// {
//     "title": "Learn MongoDB",
//     "description": "Study Mongoose schemas and queries",
//     "status": "active",
//     "date": "2025-05-25"  // MongoDB will interpret this as midnight UTC
// }