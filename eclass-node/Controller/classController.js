var randomString = require('randomstring');
var {User}=require('../Model/User');
var {Class}=require('../Model/Class');

const mongoose=require("mongoose");



exports.createClass=(req,res,next)=>{
    const classcode=randomString.generate({length:6});

   var classCreate=new Class({
        classname:req.body.classname,
        classcode:classcode,
        creatorOfclass:req.body.creatorOfclass,
        teachers:new Array(req.body.creatorOfclass),
        students:[]});
          classCreate.save().then((res1)=>{
             User.findById(mongoose.Types.ObjectId(res1.creatorOfclass)).then((res2)=>{
                 res2.classes.push(res1);
                 res2.save();
                 res.send(res1);
             }).catch(err=>res.send(err)); 
          }).catch(err=>res.send(err));

}

exports.addTeacher=(req,res,next)=>{
    const teacherToadd=User.findById(req.body.userid);
    const teacherInclass=Class.findById(req.body.classId);
    teacherToadd.classes.push(teacherInclass);
    teacherToadd.save().then((teachAdded)=>{
        teacherInclass.teachers.push(teachAdded);
        teacherInclass.save((err,docs)=>{
            if(err) res.status(404).json({message:`Error occur during adding teacher in class ${teacherInclass.classname}`});
            res.status(200).json({message:`${teachAdded.fname} added in class ${docs.classname}`});
        })
    });
    

}

exports.joinClassStudent=(req,res,next)=>{
    var classcode=req.body.classcode;
    var user=req.body.student;

    

    if(user!=null || user!=undefined)
    {
        Class.find({classcode:classcode}).then((getClass)=>{

            var teacherList=getClass[0].teachers;
            var studentList=getClass[0].students;
            if(teacherList.indexOf(user)!==-1)
            {
                res.send({message:`Already join as teacher`});
            }
            if(studentList.indexOf(user)!==-1)
            {
                res.send({message:`Already join as student`});
            }
            else{
               
            
                getClass[0].students.push(user);
                getClass[0].save().then((studentJoinClass)=>{
                   User.findById(user).then((getStudent)=>{
                      getStudent.classes.push(getClass[0]);
                      getStudent.save();
                      res.send({class:getClass[0].students,student:getStudent}); 
                   }).catch(err=>{console.log(err)});
                }).catch(err=>{console.log(err)});
              
            
            }
                             
            
    
          });
      }
}



