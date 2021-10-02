const {Schema} = require('mongoose');
const mongoose=require("mongoose");
const classSchema=mongoose.Schema({

    classname:{
        type:String,
        //required:true
    },
    classcode:{
        type:String,
        unique:true
    },
    creatorOfclass:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    teachers:[{
        type: Schema.Types.ObjectId,
        ref:'user'
    }],
    students:[{
        type: Schema.Types.ObjectId,
        ref:'user',
        default:[]
    }],
    status:{
        type:String,
        default:'Unblock'
    }
    
});
const Class=mongoose.model('class',classSchema);
module.exports={Class};