const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
    name: String,
    lat: Number,
    long: Number,
    marker: Number
});

const school = module.exports = mongoose.model('school', SchoolSchema);
