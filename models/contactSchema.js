
var mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true,
    },
    number: {
        type: 'String',
        required: true
    }
    
});

module.exports.Contact = mongoose.model('Contact', ContactSchema);


