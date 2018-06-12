const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const wigSchema = new Schema({
    title: {type: String, required: true},
    texture: {type:String, required: true},
    description: {type:String, required: true},
    length: {type:String, required: true},
    cap: {type:String, required: true},
    price: {type: Number, required: true}
})
module.exports= mongoose.model('Wig', wigSchema)