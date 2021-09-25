const {User}=require('../Model/User');
const {Role}=require('../Model/Role');
const {Class}=require('../Model/Class');

exports.getUsers=async(req,res,next)=>{
     const users=await User.find({});
     res.status(200).send({
        data: users
    });
}

exports.changeStatus=(req,res,next)=>{
    User.findById(req.body.userid).then((res1)=>{
          if(res1.status=='Unblock') res1.status='Block';
          if(res1.status=='Block') res1.status='Unblock';
          res1.save();
    }).catch(err=>{
        console.log(err);
        res.status(500).res.send({messasge:`Error occur while changing status`});
    });
}
