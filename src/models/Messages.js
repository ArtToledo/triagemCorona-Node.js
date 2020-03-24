const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
    author: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Messages', MessagesSchema);