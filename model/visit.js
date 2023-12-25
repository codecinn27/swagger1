const mongoose = require('mongoose')
const Visitor = require('./visitor');

const visitSchema = new mongoose.Schema({
    purposeOfVisit: {
        type: String,
        required: true
    },
    visitTime: {
        type: Date,
        default: Date.now
    },
    visitor_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Visitor'
    },
    // Add more properties for the visit as needed
    // For example: checkInTime, checkOutTime, etc.
}, { timestamps: true });  // Add timestamps to track visit creation and update times

module.exports = mongoose.model('Visit', visitSchema);