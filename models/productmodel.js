// models/Policy.js

const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Policy = mongoose.model('Policy', PolicySchema);

module.exports = Policy;
