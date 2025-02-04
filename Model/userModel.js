var mongoose = require('mongoose');
var userschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    contact:{
        type:String
    },
    address:{
        type:String
    },
    hobby:{
        type:String
    },
    city:{
        type:String
    },
    gender:{
        type:String
    }
})
module.exports = mongoose.model("user",userschema); 