const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
    name: {
        type: String
    },
    lat: {
        type: Number
    },
    long: {
        type: Number
    },
    marker: {
        type: Number
    }
});

const school = module.exports = mongoose.model('school', SchoolSchema);
