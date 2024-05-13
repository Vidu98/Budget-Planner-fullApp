const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },

    lname: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],  
        default: 'user'           
    },
    email: {
        type: String,
        required: true,
        unique: true,     
        lowercase: true,  
        trim: true,       
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 128
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const User = mongoose.model('User', UserSchema, 'user');

module.exports = User;
