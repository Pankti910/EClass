const {Schema} = require('mongoose');
const mongoose=require("mongoose");
const userSchema=mongoose.Schema({

    fname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String,
        //required:true,
        trim:true
    },
    password:{
        type:String,
        //required:true
    },
    role:{
        type: Schema.Types.ObjectId,
        ref:'role',
    },
    
    accessToken:{
        type:String
    },
    status:{
        type:String,
        default:'Unblock'
    },
    classes:[{
        type: Schema.Types.ObjectId,
        ref:'class'
    }]
});
const User=mongoose.model('user',userSchema);
module.exports={User};