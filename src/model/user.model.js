const mongoose = require('mongoose');
    
    const UserItemSchema = new mongoose.Schema({
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
            index: {
                uniqe : true
            },
            minlength: [6, "Email can't be shorter than 6 characters."],
            maxlength: [64, "Email can't be longer than 64 characters."],
        },
        phone_number: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true
        }
    }, {
        timestamps : true       
    });

    
module.exports = mongoose.model('user', UserItemSchema);
