const mongoose = require('mongoose');
const userSchema = require('../db/schema/user')
const User = mongoose.model('User')

module.exports= User