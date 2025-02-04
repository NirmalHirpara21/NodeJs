var mongoose = require('mongoose');
var userschema1 = new mongoose.Schema({
    name:{
        type:String
    },
    contact:{
        type:String
    },
    gender:{
        type:String
    },
    u_id:{
        type:String
    }
})
module.exports = mongoose.model("user1",userschema1); 