const moongoose = require('mongoose')
const customerSchema = new Schema({
    name: String, 
    email: String, 
    password: String
});

const wigtypeSchema = new Schema({
    name: String, 
    length: String,
    texture: String,
    image: [image]
})

const orderSchema = new Schema({
    name: String,
    orderInfo: {wigtypeSchema, customerSchema}
    orderDate:
})
Mongoose.model('customer', customerSchema);