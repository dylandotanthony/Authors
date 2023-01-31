const mongoose = require('mongoose');
const AuthorsSchema = new mongoose.Schema({
    name: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Authors', AuthorsSchema);

