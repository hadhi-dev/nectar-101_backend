const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    NickName: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Latitude: {
        type: Number
    },
    Longitude: {
        type: Number
    }
}, { timestamps: true });

module.exports = mongoose.model('Location', LocationSchema);
