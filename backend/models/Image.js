// models/Image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    url: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', imageSchema);
