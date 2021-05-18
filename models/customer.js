const mongoose = require('mongoose');

// Create the schema
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    barber: {
        type: String,
        enum: ['Phillip', 'Ryan', 'Sarah']
    },
    date: {
        type: Date,
        required: true 
    }
});

const Customer = new mongoose.model('Customer', customerSchema);

module.exports = Customer;