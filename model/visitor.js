const mongoose = require('mongoose')
const visitorSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    purposeOfVisit:{
        type: Number,
        required: true
    },
    phoneNumber:{
        type:Number,
        required:true
    }
    
})

const Visitor = mongoose.model('Visitor', visitorSchema);
module.exports = Visitor;