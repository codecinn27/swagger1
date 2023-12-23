const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        min: 8
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        enum: ['host','admin']
    },
    // inferior:{

    // }
})

const User = mongoose.model('User', userSchema);
module.exports = User;