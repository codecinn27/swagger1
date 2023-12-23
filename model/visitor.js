const mongoose = require('mongoose')
const visitorSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    }
    
})

const Visitor = mongoose.model('Visitor', visitorSchema);
module.exports = Visitor;