const {User}=require('../Model/User');
const {Role}=require('../Model/Role');
const {Class}=require('../Model/Class');


exports.getUsers=(req,res,next)=>{

    /*
    Role.find({}).populate('users','fname').exec(function(err,users){
          console.log(JSON.stringify(users));
    });*/

   /*Class.find({}).populate('students').exec(function(err,students){
       console.log(students);
   });*/
  
//    User.find({}).populate({path:'classes.classname',select:'classname'}).exec().then(function(docs){
//        console.log(docs);
//    });
     
    // User.findById(req.body.userid).then((res)=>{
    //     console.log(res.classes);
    // })

    User.findById(req.body.userid).populate('joinedClasses','classname').exec(function(err,data){
         res.send(JSON.stringify(data));
     })
    //  Role.find({}).populate('users').exec(function(err,data){
    //      console.log(JSON.stringify(data));
    //  })

}




exports.changeStatusUser=(req,res,next)=>{
    User.findById(req.body.userid).then((res1)=>{
          if(res1.status=='Unblock') res1.status='Block';
          if(res1.status=='Block') res1.status='Unblock';
          res1.save();
    }).catch(err=>{
        console.log(err);
        res.status(500).res.send({messasge:`Error occur while changing status`});
    });
}

exports.changeStatusClass=(req,res,next)=>{
    Class.findById(req.body.classid).then((res1)=>{
        if(res1.status=='Unblock') res1.status='Block';
        if(res1.status=='Block') res1.status='Unblock';
        res1.save();
    }).catch(err=>{
        console.log(err);
        res.status(500).res.send({messasge:`Error occur while changing status`});
    });
}
