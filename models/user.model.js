const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    fullname: String,
    password: String,
    cart: {
        type:Array,
        default:[]
    },
    isAdmin: Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,

});

module.exports = mongoose.model('users',userSchema)