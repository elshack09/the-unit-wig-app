const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wigSchema = new Schema({
    texture: String,
    length: String,
    cap: String,
})
module.exports= mongoose.model('Wig', wigSchema)