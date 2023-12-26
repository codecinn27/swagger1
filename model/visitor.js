const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },    
    phoneNumber: {
        type: Number,
        required: true
    },
    visits_id: [{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Visit'
    }]
});

module.exports = mongoose.model('Visitor', visitorSchema);
