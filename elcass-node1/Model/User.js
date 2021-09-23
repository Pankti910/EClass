const mongoose=require("mongoose");
const userSchema=mongoose.Schema({

    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:[{
        type: Schema.Types.ObjectId,
        ref:'role'
    }],
    status:{
        type:String,
        default:'unblock'
    },
    accessToken:{
        type:String
    }
});
const User=mongoose.model('user',userSchema);
module.exports=User;