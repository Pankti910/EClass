var {User}=require('../Model/User');
var {Role}=require('../Model/Role');
const mongoose=require("mongoose");

class Message{
  message=null;
  constructor(){}
  set message(message){
    this.message=message;
  }
  get message(){
      return this.message;
  }
}
exports.signup=(req,res,next)=>{
     console.log('call signup');
     var newUser=new User(req.body);
     newUser.save().then((res1)=>{
       Role.findById(mongoose.Types.ObjectId(res1.role)).then((res2)=>{
             console.log(res2);
             res2.users.push(res1);
             res2.save();

       }).catch(err=>{console.log(err)});

     });
}





exports.login=(req,res,next)=>{
    
    if(req.session.role)
    {
      console.log(req.session.role);
    }
    else
    {

      var email=req.body.email;
      var password=req.body.password;
      console.log(email);
      console.log(password);
    User.findOne({email:email,password:password}).then((data)=>{
      let m=new Message();
      if(data!=null)
      {
      
      Role.findById(data.role).then((result)=>{
         sess = req.session;
         sess.id=data._id;
         sess.role=result.rolename;
         console.log(sess);
         m.message=result.rolename;
         console.log(m);
         res.status(200).json({messasge:m});
  
      }).catch(err=>console.log(err));
         }
      else{
        m.message="Login Credential Wrong";
        
        res.status(200).json({message:message});
        
      }
      
    }).catch(err=>console.log(err));
  }
}


