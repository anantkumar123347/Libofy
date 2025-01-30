const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book' 
    }]
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
module.exports = User;
