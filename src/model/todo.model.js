const mongoose = require('mongoose');
    
    const TodoItemSchema = new mongoose.Schema({
        name: String,
        email: String,
        phoneNumber: String,
        title: String,
        description: String
    });

    
module.exports = mongoose.model('TodoItem', TodoItemSchema);
