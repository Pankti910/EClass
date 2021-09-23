const {Schema} = require('mongoose');
const mongoose=require("mongoose");
const classSchema=mongoose.Schema({

    classcode:{
        type:String,
        unique:true
    },
    creatorOfClass:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    teachers:[{
        type: Schema.Types.ObjectId,
        ref:'user'
    }],
    students:[{
        type: Schema.Types.ObjectId,
        ref:'user'
    }]
    
});
const Class=mongoose.model('class',classSchema);
module.exports=Class;