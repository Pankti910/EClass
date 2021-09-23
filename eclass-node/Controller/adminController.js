const {User}=require('../Model/User');
const {Role}=require('../Model/Role');
const {Class}=require('../Model/Class');

exports.getUsers=async(req,res,next)=>{
     const users=await User.find({});
     res.status(200).json({
        data: users
    });
}
